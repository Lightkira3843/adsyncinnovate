import React from 'react';
import { useGlobalContext } from './context';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from "./styles/Button";

const Services = () => {
  const { services } = useGlobalContext();
  console.log(services);
  return (
    <Wrapper className="section">
      <h2 className='common-heading'>Our Services</h2>
      <div className="container">
        <div className="grid grid-three-column">
          {services.map((cElmnt) => {
            const { id, title, image, video, desc } = cElmnt;
            return (
              <div key={id} className="card">
                <figure>
                  {video ? (
                    <video controls>
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img src={image} alt={title} />
                  )}
                </figure>
                <div className="card-data">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <NavLink to="/ServiceDetails">
                    <Button className='btn'>Read More</Button>
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  text-align: center;

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    gap: 3rem;
    justify-content: center;
  }

  .grid-three-column {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    .card-data {
      padding: 2rem;

      h3 {
        margin: 1.5rem 0;
        font-weight: 300;
        font-size: 2.4rem;
      }

      p {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.colors.text};
      }

      .btn {
        margin: 2rem auto;
        background-color: rgb(0 0 0 / 0%);
        border: 0.1rem solid rgb(98 84 243);
        display: flex;
        justify-content: center;
        align-items: center;
        color: rgb(98 84 243);
        font-size: 1.4rem;

        &:hover {
          background-color: rgb(98 84 243);
          color: #fff;
        }
      }
    }

    figure {
      width: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: all 0.5s linear;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        transition: all 0.2s linear;
        cursor: pointer;
      }

      &:hover::after {
        width: 100%;
      }

      &:hover img,
      &:hover video {
        transform: scale(1.2);
      }

      img,
      video {
        max-width: 90%;
        margin-top: 1.5rem;
        height: 20rem;
        transition: all 0.2s linear;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .grid-three-column {
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-three-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Services;
