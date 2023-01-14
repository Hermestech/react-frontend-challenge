
function sizeInput(size:string | undefined) {
      switch (size) {
         case "small":
               return "h-8 w-48"
         case "medium":
               return "h-12 w-72"
         case "large":
               return "h-16 w-96"
         default:
               return "h-12 w-80"
      }
}

export default function StyledInput({placeholder, inputType, name, value, onChange, width} : IInput) {
    const inputStyles=`${sizeInput(width)} rounded-md pl-2 focus:outline-none focus:ring focus:ring-sky-300 active:bg-sky-100`
 
    return <input className={inputStyles}
     type={inputType}
     placeholder={placeholder} 
     name={name}
     value={value}
        onChange={onChange}
     />
}