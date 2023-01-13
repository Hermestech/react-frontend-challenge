import CharacterList from "../organisms/character-list/character-list"
import NavBar from "../molecules/nav"

export default function Layout(){
    return (
        <div className="w-screen min-h-screen bg- flex flex-col  md:grid grid-cols-5 bg-dark-blue">
            <NavBar/>
            <div className="md:grid col-start-2 col-end-7">
                <div className="w-full flex md:h-24 bg-blue-200 justify-between">
                <div className=" w-10 h-full bg-yellow-300 ">
                    Q
                </div>
                <div className="w-80 ">
                    <input type="text" placeholder="Search your favorite character" className="w-full" />
                </div>
                </div>
                <div className="bg-red-500 flex flex-col justify-center items-center">
                <div className="bg-yellow-200 w-full flex flex-col justify-center align-middle items-center h-[calc(50vh_-_60px)] bg-center bg-cover"
                    style={{ backgroundImage:'url(/public/logo-rick.png)' }}
                />
            </div>
            <div className=" grid grid-cols-2 md:grid-cols-4 place-items-center mt-4 mb-16 md:ml-4">
                <CharacterList/>
            </div>
        </div>
    </div>
    )
}
