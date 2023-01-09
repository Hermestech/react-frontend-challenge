export default function StyledInput({placeholder, inputType} : IInput) {
    const inputStyles="h-12 w-80 rounded-md pl-2 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-100"
 
    return <input className={inputStyles}
     type={inputType}
     placeholder={placeholder} 
     />
}