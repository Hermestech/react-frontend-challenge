interface IInput {
    inputType: string;
    placeholder: string;
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IRegisteredUser {
    username?: string;
    email: string;
    password: string;
  } 
interface INewRegisteredUser extends IRegisteredUser {
    newPassword: string;
    tycAccepted: 'true' | 'false';
}