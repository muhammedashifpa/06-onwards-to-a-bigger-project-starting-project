import MeetUps from '../components/meetups/MeetupList'
import { MongoClient } from 'mongodb';
import Head from 'next/head'


function Index(props) {

  return (
      <>
        <Head>
            <title>React meetups</title>
            <meta name="description" content="browser a huge list of highly react meetups!"/>
        </Head>
        <MeetUps meetups={props.data}/>
      </>
  );
}


 export const getStaticProps = async (ctx) => {
    const client = await MongoClient.connect('mongodb+srv://ashifmohammed:rLAjVqunKSVdVrn9@cluster0.tyj4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

    const db = client.db();
    const meetupColletion = db.collection('myFirstDatabase');
    const meetups = await meetupColletion.find().toArray()
    client.close()
    console.log(meetups)
 
     return {
         props:{
             data:meetups.map((meetup)=>{
                    return{
                     title:meetup.title,
                     image:meetup.image,
                     address:meetup.address,
                     id:meetup._id.toString()
                    }
             })
         },
         revalidate:1,
     }
 }

export default Index;
