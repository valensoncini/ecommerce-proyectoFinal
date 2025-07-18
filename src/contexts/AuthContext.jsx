
import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// Crear el contexto de autenticación
const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  

  const login = (username) => {
    const token = `fake-token-${username}`;
    if(username == 'admin@mail.com'){
        console.log("Entro al if del admin")
        setAdmin(username);
        localStorage.setItem('authToken', token);
        
    }else{
       console.log("Entro al else del user")
        setUser(username);
        localStorage.setItem('authToken', token); 
       
    }
  };

  function verificacionLog(){
    const token = localStorage.getItem('authToken');
 
    if(token && token == "fake-token-admin@mail.com"){
      setAdmin(true);
      return;
    }if(token && token != "fake-token-admin@mail.com"){
      setUser(token);
      
    }
  }


  const logout = () => {
    if(admin && !user){
      localStorage.removeItem('authToken');
      setAdmin(null);
    }else if(user && !admin){
       localStorage.removeItem('authToken');
       setUser(null);
    }

  };
  return (
    <AuthContext.Provider value={{ user, admin ,login, logout, verificacionLog}}>
      {children}
    </AuthContext.Provider> );
}
export const useAuthContext = () => useContext(AuthContext);