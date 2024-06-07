import React from 'react'
import styled from 'styled-components'

// https://formspree.io/ create account to receve emails 


const Contact = () => {

  return (
    <Wrapper>
      <h2 className='common-heading'>Find US here</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3490.483279462922!2d77.63613228798955!3d28.973046912258887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c668fdea4d87f%3A0x8795def814a486e7!2sMeerut%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1717389898358!5m2!1sen!2sin" 
        width="100%" 
        height="450" 
        style={{border:0}} 
        allowFullScreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/xqkrvvea"
            method="POST"
            className="contact-inputs">
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input type="submit" value="send" />
          </form>          
        </div>
        {/* <p>You can mail us at adsyncinnovate@gmail.com or can give a call on +91-7599825862</p> */}
        

      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;

.container {
  margin-top: 6rem;
  text-align: center;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="text"],
      input[type="email"],
      textarea {
        text-transform: none; // Add this line to ensure no text transformation
      }
      
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact
