import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI ?? 'mongodb+srv://badalrkt23_db_user:0sQmVJ5jKzYRfncQ@cluster0.abwxkqt.mongodb.net/users');
        console.log('✅ MongoDB connection successful')
    }catch(error){
        console.error('Error during mongoose connection : ',error.message);
        process.exit(1);
    }
};

export default connectDB