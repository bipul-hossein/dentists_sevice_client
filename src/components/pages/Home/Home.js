import React, { useContext } from 'react';
import HomeServiceCon from './HomeSer';
import { AuthContext } from '../../../contexts/AuthProvider';
import Banner from './Banner';

const Home = () => {
  
    const {me}=useContext(AuthContext)
    console.log(me)
    return (
        <div>
            <Banner/>
           <HomeServiceCon/>
        </div>
    );
};

export default Home;