interface LoginButtonProps {
    text: string;
    myOnClick?: React.MouseEventHandler | React.FormEventHandler;
    variant: "main" | "secondary";
    buttonType: "button" | "submit" | "reset";
    disabled?: boolean | undefined;
}

export default function LoginButton({ text, myOnClick, variant, buttonType, disabled }: LoginButtonProps) {
    const main = "h-12 w-full rounded-md border-2 border-solid border-sky-100 bg-sky-500 font-semibold text-white";
    const secondary = "h-12 w-full md:w-full rounded-md border-2 border-solid border-sky-500 bg-sky-100";
    const disabledButton = "h-12 w-full rounded-md border-2 border-solid border-sky-100 bg-sky-100 font-semibold text-white";

    function handleDisabledButton() {
        if (disabled) {
            return disabledButton;
        } else {
            return variant === "main" ? main : secondary;
        }
    }
    return(
        <button 
        className={handleDisabledButton()}
        onClick={myOnClick}
        type={buttonType}
        disabled={disabled}
        >
            {text}
        </button>
    )
}