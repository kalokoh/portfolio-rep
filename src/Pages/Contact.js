import React from 'react';
import Form from '../Form/Form';
import classes from './Contact.module.css'


const Contact = () => {
  return (
    <React.Fragment>
  <div className={classes['contact-container']}>
    <div className={classes.contact}>
      <div className={classes.first}>
        <h1>Contact Me Directly Here</h1>
      </div>
      <div className={classes.second}>
        <Form />
      </div>

    </div>
  </div>
  </React.Fragment>
  );
};

export default Contact;