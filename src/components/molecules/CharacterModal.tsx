import * as React from 'react';
import Modal from 'react-modal';

type CharacterModalProps = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    characterImage: string;
    characterName: string;
    status: string;
    species: string;
    origin: string;
}


export default function CharacterModal ({open, setOpen, characterImage, characterName, status, species, origin}: CharacterModalProps) {
    function closeModal() {
        setOpen(false);
    }
    return (
        <div>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                ariaHideApp={false}
                className="bg-white w-96 h-96 flex flex-col justify-center items-center rounded-lg border-2 border-black"
                overlayClassName="fixed inset-0 z-10 bg-black bg-opacity-10 flex justify-center items-center"
            >
                <div className='w-full flex justify-end pr-6'>
                    <button onClick={closeModal}>X</button>
                </div>
                
                <div className='w-60 h-52 flex justify-center items-center mb-4 rounded-2xl'>
                    <img src={characterImage} alt="character image" className='w-full h-full rounded-2xl'/>
                </div>
                <ul className='text-center'>
                    <li><span className=' font-bold text-base'>{characterName}</span></li>
                    <li><span className=' font-bold text-base'>{status}</span></li>
                    <li><span className=' font-bold text-base'>{species}</span></li>
                    <li><span className=' font-bold text-base'>{origin}</span></li>  
                </ul>
            </Modal>
        </div>
    );
}