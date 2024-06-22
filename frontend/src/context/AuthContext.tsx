import axios from "axios";
import React, { createContext, useState, ReactNode, useContext } from "react";
// import { jwtDecode } from "jwt-decode";

// Definisikan tipe untuk state auth
interface AuthState {
  email: string;
  isAuthenticated: boolean;
}

// Definisikan tipe untuk context
interface AuthContextType {
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Buat context dengan nilai default
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Buat provider untuk context
const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    email: "",
    isAuthenticated: false,
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      if (response.status !== 200) {
        throw new Error(response.data.message || "Login failed");
      }

      // Simpan data autentikasi atau token sesuai kebutuhan
      localStorage.setItem("token", response.data.token);
      setAuthState({ email, isAuthenticated: true });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data.message || "Login failed";
      }
      return "Login failed";
    }
  };

  const logout = () => {
    // Hapus token dari localStorage
    localStorage.removeItem("token");
    setAuthState({ email: "", isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Buat custom hook untuk menggunakan AuthContext
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
