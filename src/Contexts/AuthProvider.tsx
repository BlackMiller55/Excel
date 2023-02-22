import { createContext, useState } from "react";

interface Authprops {
    children: JSX.Element;
}

interface IAuth {
    user: string;
    permissions: string;
    accessToken: string;
    roles:any;
}

type AuthType = {
    auth: IAuth | null
    setAuth: React.Dispatch<React.SetStateAction<IAuth | null>>
}
  
export const AuthContext = createContext({} as AuthType);

export const AuthProvider = ({ children }: Authprops) => {
    const [auth, setAuth] = useState<IAuth | null>(null);

    return (
        <AuthContext.Provider value={{ auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

