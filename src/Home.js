// 

import TourCard from "./TourCard";
import { info } from "./info";
import { useState } from "react";

const Home = () => {

    const [data, setData] = useState(info)

    const changeInterest = (id) => {
        var getInfo = info[id]
        getInfo.notInsterested = true
        setData(info)
        console.log(data)
    }


    return (
        <div>
            <div className="main-title">
                <h2>Our Tours</h2>
                <div></div>
            </div>



            <div className="tour-container">
                {

                    data.map((tour) => (
                        <>
                            {< TourCard title={tour.title} description={tour.description} img={tour.image} price={tour.price} key={tour.id} func={changeInterest} Id={tour.id} show={tour.notInsterested} />}
                        </>


                    ))
                }


            </div>


        </div>



    );
}

export default Home;