import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const Home = () => {
    
    const {me}=useContext(AuthContext)
    console.log(me)
    return (
        <div>
<h1>09weri09qiwrq0ik</h1>
            
        </div>
    );
};

export default Home;