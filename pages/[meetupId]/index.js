import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';
import {MongoClient, ObjectId} from 'mongodb';
import Head from 'next/head';

function Index(props) {
  return (
    <>
      <Head>
        <title>{props.data.title}</title>
      </Head>
      <MeetupDetail data={props.data}/>
    </>
    )
    
}



export const getStaticPaths = async () => {
  const client = await MongoClient.connect('mongodb+srv://ashifmohammed:rLAjVqunKSVdVrn9@cluster0.tyj4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

  const db = client.db();

  const meetupColletion = db.collection('myFirstDatabase');

  const meetups = await meetupColletion.find({},{_id:1}).toArray();
  console.log(meetups.map(meetup=>({params:{meetupId:meetup._id.toString()}})))
  
  // client.close()


  return {
    fallback:'blocking',
    paths: meetups.map(meetup=>({params:{meetupId:meetup._id.toString()}})),
  }
}

export const getStaticProps = async (ctx) => {
  const meetupId = ctx.params.meetupId;
  console.log(meetupId)

  const client = await MongoClient.connect('mongodb+srv://ashifmohammed:rLAjVqunKSVdVrn9@cluster0.tyj4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

  const db = client.db();

  const meetupColletion = db.collection('myFirstDatabase');

  const seletedMeetUp = await meetupColletion.findOne({'_id':ObjectId(meetupId)});

  // client.close();
  console.log(seletedMeetUp)
  return {
    props:{
      data: {
        id:seletedMeetUp._id.toString(),
        image:seletedMeetUp.image,
        title:seletedMeetUp.title,
        address:seletedMeetUp.address
      },
    },
    revalidate: 1,
  }
}
export default Index;