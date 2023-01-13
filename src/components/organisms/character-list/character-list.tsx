import * as React from 'react';
import { useQuery } from 'urql';
import { CharacterListQuery } from '../../../queries/queries';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from '../../atom/spinner';

import CharacterModal from '../../molecules/CharacterModal';

function handleScroll(setPage: any, page: number) {
    const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const scrollHeight = (document.documentElement || document.body.parentNode || document.body).scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    const randomPage = Math.floor(Math.random() * 42) + 1;
    if (scrolledToBottom) {
        setPage(randomPage)
    }
  }

export default function CharacterList () {
    const [open, setOpen] = React.useState(false)
    const [selectedCharacter, setSelectedCharacter] = React.useState({
        image: '',
        name: '',
        status: '',
        species: '',
        origin: {name:''}
    });
    const [page, setPage] = React.useState(1)
    const [result] = useQuery({ 
        query: CharacterListQuery, 
        variables: { input: page }
    })
    const { data, fetching, error } = result

    React.useEffect(() => {
        window.addEventListener('scroll', () => handleScroll(setPage, page))
        return () => window.removeEventListener('scroll', () => handleScroll(setPage, page))
    }, [])
    
    if (fetching) {
        return (
            <div className=' w-full h-full mr-6 flex justify-center items-center align-middle  self-center col-span-2'>
                <Spinner />
            </div>
        )
    }
    if (error) return <p>Oh no... {error.message}</p>
    const characters = data.characters.results
    const firstEightCharacters = characters.slice(0, 8)

    return (
        <>
            {firstEightCharacters.map((character: any) => (
                <div key={character.id} className="bg-dark-blue w-40 h-36 md:w-64 md:h-56 mb-4 flex flex-col justify-center items-center rounded-lg cursor-pointer text-center">
                    <div className="bg-green-200 w-32 h-24 md:w-56 md:h-40 mb-2 m:mb-4 rounded-3xl"
                        onClick={() =>{
                            setSelectedCharacter(character)
                            setOpen(true)
                        }}
                    >
                        <LazyLoadImage
                            src={character.image}
                            alt={character.name}
                            effect="blur"
                            className="w-32 h-24 md:w-64 md:h-40 rounded-3xl"
                        />
                    <p className='text-white font-bold text-ellipsis overflow-hidden  whitespace-nowrap'>{character.name}</p>
                    </div>
                    {
                        selectedCharacter && (
                            <CharacterModal 
                            open={open} 
                            setOpen={setOpen} 
                            characterImage={selectedCharacter?.image}
                            characterName={selectedCharacter?.name}
                            status={selectedCharacter?.status}
                            species={selectedCharacter?.species}
                            origin={selectedCharacter?.origin.name}
                        />
                        )
                    }

                </div>
            ))}
        </>
    ) 

}