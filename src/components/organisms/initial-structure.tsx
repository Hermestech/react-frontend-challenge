export default function InitialStructure({children} : {children: React.ReactNode }) {
    return (
        <div className="relative bg-gray-50 px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            {children}
         </div>
    )
}