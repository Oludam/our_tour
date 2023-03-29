// 

import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="main-title">
                <h2>Our Tours</h2>
                <div></div>
            </div>



            <div className="tour-container">
                <div className="tours-card">
                    <div>

                        <span className="price">$2,595</span>

                        <img src="/image.jpg" />
                    </div>
                    <div className="tour-description">
                        <h2>Best of Paris in 7 Days Tour</h2>
                        <p> Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!<button className="Less-More">Show Less</button></p>
                        <center> <button className="Interested">Not Interested</button></center>
                    </div>
                </div>

            </div>


        </div>



    );
}

export default Home;