import React from 'react';
import { useGlobalContext } from '../context';
import styled from 'styled-components';

const ServiceDetails = () => {
    const { sDetails } = useGlobalContext();

    return (
        <Wrapper className="section">
            <header>
                <h1>Details about Services</h1>
            </header>
            {sDetails.map((cElmnt) => {
                const { id, title, video, desc } = cElmnt;

                return (
                    <div key={id} id="services-container">
                        <video
                            id="service-video"
                            autoPlay
                            muted
                            onClick={(e) => e.target.paused ? e.target.play() : e.target.pause()}
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className="service-title">{title}</div>
                        <p className="service-details">{desc}</p>
                    </div>
                );
            })}
        </Wrapper>
    );
};

const Wrapper = styled.section`
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;

    header {
        text-align: center;
        padding: 20px;
        color: #fff;
    }

    #services-container {
        text-align: center;
        margin: 50px 0;
    }

    #service-video {
        max-width: 100%;
        height: 50rem; /* Set a fixed height for the video */
        object-fit: cover; /* Maintain aspect ratio and cover the entire container */
        border: 2px solid #333;
        border-radius: 10px;
        margin-bottom: 20px;
        cursor: pointer; /* Change cursor to pointer when hovering over video */
    }

    .service-title {
        font-size: 3.4rem;
        font-weight: bold;
        color: #333;
    }

    .service-details {
        font-style: italic;
        font-size: 2.5rem;
        font-weight: bold;
        color: #000000;
        line-height: 1.6;
        max-width: 51%;
        margin: 0 auto;
    }
`;

export default ServiceDetails;
