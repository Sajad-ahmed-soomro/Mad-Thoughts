import mongoose from 'mongoose';

const connection = {};

export const connectToDB = async () => {
    const date =new Date();
    console.log(date);
    if (connection.isConnected) {
        console.log('Using existing connection');
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connection.isConnected = db.connections[0].readyState;
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        throw new Error('MongoDB connection error');
    }
};
