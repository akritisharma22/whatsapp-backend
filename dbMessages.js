import mongoose from 'mongoose'

const whatsappSchema= mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean
});

export default mongoose.model('messagecontents', whatsappSchema); //messagecontent here is the name of the collection 