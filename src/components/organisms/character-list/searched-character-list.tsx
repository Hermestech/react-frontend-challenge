import * as React from 'react';
import { useQuery } from 'urql';
import { CharacterByNameQuery } from '../../../queries/queries';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Spinner from '../../atom/spinner';

import MapCharactersToCards from './character-map';

type SearchedCharacterListProps = {
    characterName: string
}


export default function SearchedCharacterList({characterName}: SearchedCharacterListProps) {
    const [open, setOpen] = React.useState(false)
    const [selectedCharacter, setSelectedCharacter] = React.useState<ICharacter>({
        id: '',
        image: '',
        name: '',
        status: '',
        species: '',
        origin: {name:''}
    });
    const [page, setPage] = React.useState(1)
    
    const [result] = useQuery({
        query: CharacterByNameQuery,
        variables: { input: page, name: characterName}
    })

    const { data, fetching, error } = result

    if (fetching) {
        return (
            <div className=' w-full h-full mr-6 flex justify-center items-center align-middle  self-center col-span-2 md:col-span-5'>
                <Spinner />
            </div>
        )
    }
    if (error) return <p>Oh no... {error.message}</p>
    const characters = data.characters.results
    const firstEightCharacters = characters.slice(0, 8)

    return (
        <MapCharactersToCards
            listOfCharacters={firstEightCharacters}
            setSelectedCharacter={setSelectedCharacter}
            selectedCharacter={selectedCharacter}
            open={open}
            setOpen={setOpen}
        />
    )
}