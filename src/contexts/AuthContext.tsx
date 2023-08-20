import { SignInResponseType } from '@/@types/user';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AuthContextData {
  user: SignInResponseType | undefined;
  signIn: (data: SignInResponseType) => void;
  signOut: () => void;
}

interface Props {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<SignInResponseType>();
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user || user === '') {
      setUser(undefined);
    } else {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: user,
        signIn: (data: SignInResponseType) => {
          localStorage.setItem('user', JSON.stringify(data));
          setUser(data);
        },
        signOut: () => {
          localStorage.setItem('user', '');
          setUser(undefined);
          navigate('/login');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
