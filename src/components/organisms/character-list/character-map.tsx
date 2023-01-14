import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CharacterModal from '../../molecules/CharacterModal';

type MapCharactersToCardsProps = {
    listOfCharacters: ICharacter[];
    setSelectedCharacter: React.Dispatch<React.SetStateAction<ICharacter>>;
    selectedCharacter: any;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MapCharactersToCards({
    listOfCharacters,
    setSelectedCharacter,
    selectedCharacter,
    open,
    setOpen
 }: MapCharactersToCardsProps) {
return (
    <>
    {listOfCharacters.map((character: any) => (
        <div key={character.id} className="bg-dark-blue hover:bg-semi-dark-blue w-40 h-36 md:w-64 md:h-56 mb-4 flex flex-col justify-center items-center rounded-lg cursor-pointer text-center">
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