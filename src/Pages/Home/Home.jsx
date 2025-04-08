// import React from "react";

// const Home = () => {
//   return <div> this is home page</div>;
// };

// export default Home;
import React from 'react';
import Banner from './Banner';
import Slider from '../../components/slider';
import Hotjobs from './Hotjobs';

const Home = () => {
                    return (
                                        <div>
                                                 <Banner></Banner>   
                                                 <Slider></Slider>  
                                                 <Hotjobs></Hotjobs>      
                                        </div>
                    );
};

export default Home;
