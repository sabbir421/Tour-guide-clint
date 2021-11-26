import React from 'react';
import Bannar from '../Bannar/Bannar';

import Services from '../Services/Services';
import Upcomming from '../Upcomming/Upcomming';


const Home = () => {
    return (
        <div id='home'>
           
            <Bannar></Bannar>
            <Services ></Services>
            <Upcomming></Upcomming>
            
        </div>
    );
};

export default Home;