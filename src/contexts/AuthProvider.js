import React, { createContext } from 'react';


export const AuthContext = createContext()
const AuthProvider = ({ children }) => {


    const me = { name: 'bipul', ages: '25 years' }
    const authInfo = { me }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;