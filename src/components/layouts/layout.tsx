import * as React from "react"
import CharacterList from "../organisms/character-list/default-character-list"
import NavBar from "../molecules/nav"
import SearchedCharacterList from "../organisms/character-list/searched-character-list"
import SearchBar from "../molecules/search-bar"


export default function Layout(){
    const [searchValue, setSearchValue] = React.useState('')
    const [characterName, setCharacterName] = React.useState('')
    return (
        <div className="w-screen min-h-screen bg- flex flex-col  md:grid grid-cols-5 bg-dark-blue">
            <NavBar/>
            <div className="md:grid col-start-2 col-end-7">
                <SearchBar
                    setCharacterName={setCharacterName}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                <div className="w-full flex flex-col justify-center align-middle items-center h-[calc(50vh_-_60px)] bg-center bg-cover bg-blend-overlay bg-no-repeat bg-[rgba(0,0,0,0.5)] "
                    style={{ backgroundImage:'url(/logo-rick.png)' }}
                >
                    <h1 className="text-4xl text-white font-black">Rick and Morty</h1>
                    <p className="text-white">Find your favorite character</p>
                </div>
            <div className=" grid grid-cols-2 md:grid-cols-4 place-items-center mt-4 mb-16 md:ml-4">
               {
                     characterName ? <SearchedCharacterList characterName={characterName} /> : <CharacterList />
               }
            </div>
        </div>
    </div>
    )
}
