// 

import TourCard from "./TourCard";
import { info } from "./info";
import { useState, useEffect } from "react";
import Loader from "./Loader";

const Home = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [allGone, setAllGone] = useState(false)

    const loadPage = () => {
        setAllGone(false)
        setLoading(true)
        setData(info)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }


    useEffect(() => {
        loadPage()
    }, [])

    const removeNotInterested = (id) => {
        const getInfoId = data.filter(all => all.id !== id)
        if (getInfoId.length === 0) {
            return setAllGone(true)
        }
        setData(getInfoId)
    }


    return (
        <div style={{ marginBottom: '70px' }}>
            {allGone ?
                <div className="no-tours">
                    <h1>No Tours Left</h1>
                    <button onClick={() => loadPage()} >Refresh</button>
                </div> : loading ? <center >< Loader /></center> :
                    <>
                        <div className="main-title">
                            <h2>Nigeria Tours</h2>
                            <div></div>
                        </div>
                        <br />
                        <div className="tour-container">

                            {data &&
                                data.map((tour) => (
                                    <>
                                        {< TourCard title={tour.title} description={tour.description} img={tour.image} price={tour.price} key={tour.id} func={removeNotInterested} Id={tour.id} show={tour.notInsterested} />}
                                    </>
                                ))
                            }
                        </div>

                    </>
            }
        </div>
    );
}

export default Home;