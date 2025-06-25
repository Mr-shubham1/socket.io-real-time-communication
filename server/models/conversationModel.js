import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    participantsId:[{type:mongoose.Schema.Types.ObjectId,
        ref:"users"}],
    messagesId:[{type:mongoose.Schema.Types.ObjectId,
        ref:"messages"}]
},{timestamps:true})

export const conversationModel = mongoose.model("conversations",conversationSchema);