import React, { useState, useRef } from "react";
import classes from "./Form.module.css";
import emailjs from '@emailjs/browser';

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false);
  const form = useRef(null)

  //validity check
  const nameValidity = enteredName.trim().length !== 0;
  const emailValidity =
    enteredEmail.trim().includes("@") && enteredEmail.trim().length !== 0;
  const messageValidity = enteredMessage.trim().length !== 0;

  const nameIsInValid = !nameValidity && error;
  const emailIsInValid = !emailValidity && error;
  const messageIsInValid = !messageValidity && error;

  const nameChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };
  const messageChangeHandler = (e) => {
    setEnteredMessage(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError(true);

    if (!nameValidity) {
      return;
    } else if (!emailValidity) {
      return;
    } else if (!messageValidity) {
      return;
    } else {
      emailjs.sendForm('service_lqf9oyf', 'template_oj8y5l1', form.current,    'user_6FGgIG8yPTHxuSvYq6ZiQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log("form submitted");
      setEnteredName("");
      setEnteredEmail("");
      setEnteredMessage("");
    }

    setisSubmitted(true);
    setError(false);
  };

  const showForm = () =>{
      setisSubmitted(false)
  }
  return (
    <React.Fragment>
      {!isSubmitted && (
        <form className={classes.form} onSubmit={submitHandler} ref={form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="to_name"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
          />
          {nameIsInValid && <p>please enter your name</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="from_name"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          {emailIsInValid && <p>please enter a valid email</p>}

          <label htmlFor="message">Send a message</label>
          <textarea
            name="message"
            placeholder="Message"
            id="message"
            cols="15"
            rows="5"
            value={enteredMessage}
            onChange={messageChangeHandler}
          ></textarea>
          {messageIsInValid && <p>please enter some text</p>}

          <button type="submit">Submit</button>
        </form>
      )}
      {isSubmitted && (
        <div className={classes["submitted-container"]}>
          <p className={classes.submitted}>
            Thank you for contacting Me! I will get on to you shortly. You can
            also call me directly on +232 31 565446
          </p>
          <button onClick={showForm}>Back To form</button>
        </div>
      )}
    </React.Fragment>
  );
};

export default Form;
