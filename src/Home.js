// 

import TourCard from "./TourCard";
import { info } from "./info";
import { useState, useEffect } from "react";

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
        <div>
            {allGone ?
                <div>
                    <button onClick={() => loadPage()} >Refresh</button>
                </div> :
                <>
                    <div className="main-title">
                        <h2>Our Tours</h2>
                        <div></div>
                    </div>
                    {loading ? <div>loading...</div> :
                        <div className="tour-container">

                            {data &&
                                data.map((tour) => (
                                    <>
                                        {< TourCard title={tour.title} description={tour.description} img={tour.image} price={tour.price} key={tour.id} func={removeNotInterested} Id={tour.id} show={tour.notInsterested} />}
                                    </>
                                ))
                            }
                        </div>
                    }
                </>}
        </div>
    );
}

export default Home;