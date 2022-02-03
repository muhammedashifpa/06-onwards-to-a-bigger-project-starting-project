import React from 'react';
import MeetUpForm from '../../components/meetups/NewMeetupForm';
import {useRouter} from 'next/router';


function  Index() {
  const router = useRouter()
  async function addMeetupHandler (meetupData) {
    const res = await fetch('/api/new-meetup',{
      method:'POST',
      body:JSON.stringify(meetupData),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    console.log(data)
    router.push('/')
  }
  return <MeetUpForm onAddMeetup ={addMeetupHandler}/>;
}

export default Index;
