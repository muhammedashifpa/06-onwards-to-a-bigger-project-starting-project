import { MongoClient } from 'mongodb';


const handler = async (req,res)=>{
    if (req.method === 'POST'){
        console.log('POSTing')
        const data  = req.body;
        console.log(data)
        const client = await MongoClient.connect('mongodb+srv://ashifmohammed:rLAjVqunKSVdVrn9@cluster0.tyj4s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

        const db = client.db();
        const meetupColletion = db.collection('myFirstDatabase');
        const result = await meetupColletion.insertOne(data)

        console.log(result)
        client.close()
        res.status(201).json({message: 'Meetup inserted!'})
    }
}

export default handler;