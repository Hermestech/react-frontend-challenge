import { FaSearch } from "react-icons/fa"

type SearchBarProps = {
    setCharacterName: React.Dispatch<React.SetStateAction<string>>
    searchValue: string
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}


export default function SearchBar({
    setCharacterName,
    searchValue,
    setSearchValue
}: SearchBarProps) {
    return (
        <div className="w-full flex md:h-24 md:justify-center md:items-center justify-between">
            <button className="w-20 h-12 items-center flex justify-center"
                    onClick={() => setCharacterName(searchValue)}
            >
                <FaSearch className="w-6 h-6 fill-white"/>
            </button>
            <div className="w-80 ">
                <input 
                    type="text" 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    name="search"
                    placeholder="Search your favorite character" 
                    className="w-full h-12 pl-4 text-gray-100 bg-dark-blue"
                    />
            </div>
        </div>
    )
}