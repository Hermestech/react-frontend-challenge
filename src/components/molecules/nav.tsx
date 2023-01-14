import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import useAuthContext from "../../context/auth-context";

import DeleteModal from "./delete-modal";

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    const { logout, navigate } = useAuthContext();
    const [isOpen, setIsOpen] = useState(false);

    function handleLogout() {
        logout();
        navigate("/login");
    }

    return (
        <nav className="w-full md:flex md:flex-col md:justify-between bg-semi-dark-blue shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center">
                <div>
                    <div className="flex items-center justify-between md:justify-center py-3">
                        <article className="bg-blue-300 w-40 h-16 bg-cover bg-center rounded-md" style={{ backgroundImage:'url(/logo-rick.png)' }} />
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="flex flex-col items-center justify-center space-y-8 md:h-48 md:flex md:items-start md:pl-12">
                            <li className="text-gray-600 hover:text-blue-600">
                                <a 
                                    onClick={() => {
                                        navigate("/login");
                                    }}
                                >LOGOUT</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a
                                    onClick={() => {setIsOpen(true)}}
                                >DELETE ACCOUNT</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="#">BLOG</a>
                            </li>
                            <li className="text-gray-600 hover:text-blue-600">
                                <a href="#">CONTACT</a>
                            </li>
                        </ul>
                        <DeleteModal isOpen={isOpen} setIsOpen={setIsOpen} delete={handleLogout}/>
                    </div>
                </div>
            </div>
            
            <div className="w-40 h-24 self-center hidden md:flex justify-center items-center">
                    <ul className="inline-flex w-full justify-between h-7">
                        <li>
                            <FaFacebookF className="fill-greyish-blue w-6 h-6"/>
                        </li>
                        <li>
                            <FaTwitter className="fill-greyish-blue w-6 h-6"/>
                        </li>
                        <li>
                            <FaInstagram className="fill-greyish-blue w-6 h-6"/>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}