import React, { useState } from "react";

const AuthContext = React.createContext();

const AuthProvider = () => {
  const [user, setUser] = useState(null);
  const [isLogin, setisLogin] = useState(null);
  
  return <div>AuthContext</div>;
};

export default AuthContext;
