import mongoose from "mongoose";

const pictureSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    bird_name: {type: String, required: true},
    image: {type: String},
    description: {type: String}
}, {versionKey: false})

const picture = mongoose.model("pictures",pictureSchema);

export default picture;