import React from 'react';
import classes from './MeetupDetail.module.css';

function MeetupDetail(props) {
  console.log('Detail page loaded');
  return (
      <section className={classes.detail}>
            <img src={props.data.image} alt={props.data.title} />
            <h1>{props.data.title}</h1>
            <address>{props.data.address}</address>
            <p>meetup discription</p>
      </section>
  )
}




export default MeetupDetail;
