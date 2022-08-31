import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// npm i @emailjs/browser
<header>
<h2 class="logo">Octet</h2>
<div class="toggle"></div>        
</header>

const Contact = () => {
    const notify = () =>{

        toast("Message sent");

    }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    

    emailjs
      .sendForm(
        "service_1gicj9l",
        "template_aumpno7",
        form.current,
        "byvcUTQ1GQp6LN_78"
      )
      .then(
        (result) => {
          console.log(result.text);
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
  
    <StyledContactForm>
     
            
                
        
      <form ref={form} onSubmit={sendEmail}>
        <h1>NEED ASSISTANCE ?</h1>
        <label>NAME</label>
        <input type="text" name="user_name" />
        <label>EMAIL</label>
        <input type="email" name="user_email" />
        <label>MESSAGE/QUERY</label>
        <textarea name="message" />
        
        <input type="submit" value="SEND" onClick={notify}/>
      </form>
      <ToastContainer />
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label {
      margin-top: 1rem;
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
    }
  }
`;