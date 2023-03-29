import React, { useState } from 'react'



function TourCard({ title, img, description, price, ...props }) {

    const [showMore, setShowMore] = useState(false)

    const changeInterest = (id) => {
        console.log(props.interest)
    }

    return (
        <div className="tours-card" style={{ display: props.show && 'none' }}>
            <div>

                <span className="price">{price}</span>
                <img src={img} />
            </div>
            <div className="tour-description">


                <h2>{title}</h2>
                <p>{showMore ? description : `${(description.slice(0, 199))} ...`}<button className="Less-More" onClick={() => setShowMore(!showMore)}>{showMore ? 'Show Less' : 'Read More'}</button></p>
                <center> <button className="Interested" onClick={() => props.func(props.Id - 1)}>Not Interested</button></center>
            </div>
        </div>

    )
}

export default TourCard