interface LoginButtonProps {
    text: string;
    myOnClick?: React.MouseEventHandler | React.FormEventHandler;
    variant: "main" | "secondary";
    buttonType: "button" | "submit" | "reset";
}

export default function LoginButton({ text, myOnClick, variant, buttonType }: LoginButtonProps) {
    const main = "h-12 w-96 rounded-md border-2 border-solid border-sky-100 bg-sky-500 font-semibold text-white";
    const secondary = "h-12 w-full md:w-96 rounded-md border-2 border-solid border-sky-500 bg-sky-100";
    return(
        <button 
        className={variant === "main" ? main : secondary}
        onClick={myOnClick}
        type={buttonType}
        >
            {text}
        </button>
    )
}