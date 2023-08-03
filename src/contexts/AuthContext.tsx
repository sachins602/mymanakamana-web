import { createContext, useContext, useState } from "react";

export interface AuthContextData {
  signed: boolean;
  admin: boolean;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isUserLoggedIn] = useState(false);
  const [isAdmin] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        admin: isAdmin,
        signed: isUserLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
