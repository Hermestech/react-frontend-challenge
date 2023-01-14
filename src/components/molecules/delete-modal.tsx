import * as React from 'react';
import { useAuthContext } from '../../context/auth-context';
import Modal from 'react-modal';

type DeleteModalProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    delete: () => void;
}

export default function DeleteModal({
    isOpen,
    setIsOpen,
    delete: deleteItem
}: DeleteModalProps) {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <Modal
                isOpen={isOpen}
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
                    <h2 className='text-2xl font-bold'>Are you sure you want to delete this user?</h2>
                </div>
                <div className='w-full flex justify-center items-center gap-2'>
                    <button onClick={closeModal} className="w-24 h-12 bg-red-400">Cancel</button>
                    <button onClick={deleteItem} className="w-24 h-12 bg-green-400">Delete</button>
                </div>
            </Modal>


        </>
    )
}