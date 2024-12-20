import { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

interface User {
    fullName: string;
    email: string;
    username: string;
  }

interface AuthContextType {
    user: User | null;
    accesstoken: string | null;
    notLoggedIn: boolean | null;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children } : { children: ReactNode }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState<User | null>(null);
    const [accesstoken, setAccessToken] = useState<string | null>(null);
    const [notLoggedIn, setNotLoggedIn] = useState(true)

    const login = async (username: string, password: string) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login/', {
                username,
                password,
            }, {
                headers: {
                    'Content-Type' : 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                }
            });
            const { access, refresh } = response.data;
            localStorage.setItem('accessToken', access);
            localStorage.setItem('refreshToken', refresh);
            console.log('Login successful');
            setNotLoggedIn(false)
            // After successful login, redirect to homepage
            navigate('/')
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const logout = () => {
        setUser(null)
        setAccessToken(null)
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setNotLoggedIn(true)
        navigate('/')
    }

    const refreshAccessToken = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/token/refresh', {
                refresh: accesstoken,
            });
            setAccessToken(response.data.access);
        } catch (error: unknown) {
            console.error("Token related field: ", error.response?.data || error.message);
            logout();
        }
    };
    
    useEffect(() => {
        if (accesstoken) {
            const refreshInterval = setInterval(() => {
                refreshAccessToken();
            }, 14 * 60 * 1000);
            
            return () => clearInterval(refreshInterval);
        }
    })

    return (
        <AuthContext.Provider value={{ user, accesstoken, notLoggedIn, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
