import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connection successful')
    }catch(error){
        console.log('Fetched URI : ', process.env.MONGO_URI)
        console.error('Error during mongoose connection : ',error.message);
        process.exit(1);
    }
};

export default connectDB