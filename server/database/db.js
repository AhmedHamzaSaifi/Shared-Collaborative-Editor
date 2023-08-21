import mongoose  from 'mongoose';

const Connection = async (username = process.env.DB_Username, password = process.env.DB_password) => {
    const URL = `mongodb+srv://${username}:${password}@shared-collaborative-ed.9yskomr.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;