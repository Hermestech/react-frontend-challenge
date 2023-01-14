interface IInput {
    inputType: string;
    placeholder: string;
    value: string;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    width?: string;
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

interface ILoginUser extends Omit<IRegisteredUser, 'username'> {
    rememberMe: boolean;
}

interface ICharacter {
    id: string;
    image: string;
    name: string;
    status: string;
    species: string;
    origin: {
        name: string;
    };
}