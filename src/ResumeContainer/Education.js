import React from 'react';
import classes from './Education.module.css';

const Education = () => {
  return (
    <React.Fragment>
         <div className={classes.details}>
          <div className={classes.fcontainer}>
            <div className={classes.first}>
              <h3>Saint Paul's Secondary School</h3>
              <div className={classes.duration1}><p>2015 - 2018</p></div>  
            </div>
            <p className={classes.bece}>
              Basic Education Certificate Examination (BECE)
            </p>
          </div>


          <div className={classes.fcontainer}>
            <div className={classes.first}>
              <h3>Rising Academy Network</h3>
              <div className={classes.duration1}><p>2019 - 2021</p></div> 
              
            </div>
            <p className={classes.bece}>
             WASSCE
            </p>
          </div>


          <div className={classes.fcontainer}>
            <div className={classes.first}>
              <h3>BlueCrest College</h3>
              <div className={classes.duration1}><p>2022 - present</p></div> 

              
            </div>
            <p className={classes.bece}>
              Diploma in Hardware and Networking
            </p>
          </div>

        </div>
    </React.Fragment>
  )
}

export default Education