import React, { useState } from 'react';
import one from '../images/01.jpg';
import two from '../images/02.jpg';
import three from '../images/03.jpg';
import four from '../images/4.jpg';


const Portfolio = () => {

    const [team] = useState([
        {
            id: 1,
            name: "Shagun Sharma",
            image: one,
            expert: "Web Developer"
        },
        {
            id: 2,
            name: "Shubhan Sharma",
            image: two,
            expert: "Technical expert"
        },
        {
            id: 3,
            name: "Shweta Sharma",
            image: three,
            expert: "App Developer"
        }
    ]);
    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__section">
                    <div className="row">
                        <div className="col-4">
                            <div className="portfolio__content">
                                <h6 className="portfolio__content-h6">EMPLOYEES</h6>
                                <h3 className="portfolio__content-h3">OUR TEAM</h3>
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row">
                                {
                                    team.map(d => (
                                        <div key={d.id} className="col-4 pl-15">
                                            <div className="portfolio__card">
                                                <div className="portfolio__card-img">
                                                    <img src={d.image} alt="" />
                                                    <h5 className="portfolio__card-name">{d.name}</h5>
                                                    <p className="portfolio__expert">{d.expert}</p>

                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
