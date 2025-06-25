import {conversationModel } from "../models/conversationModel.js";
import { messageModel } from "../models/messageModel.js";


export const sendmessage = async (req,res) => {
    try {
        const senderId = req.userId;
        const receiverId = req.params.id;
        const {message} = req.body;

        let gotConversation = await conversationModel.findOne({
            participantsId:{$all : [senderId, receiverId]},
        });

        if(!gotConversation){
            gotConversation = await conversationModel.create({
                participantsId:[senderId, receiverId]
            })
        };
        const newMessage = await messageModel.create({
            senderId,
            receiverId,
            message
        });
        if(newMessage){
            gotConversation.messagesId.push(newMessage._id);
        };
        

        await gotConversation.save();
        res.json({
            success:true,
            message:"messege sent successfully"
        })
         
        // SOCKET IO

    } catch (error) {
        console.log(error);
    }
}
export const getmessage = async (req,res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.userId;
        const conversation = await conversationModel.findOne({
            participantsId:{$all : [senderId, receiverId]}
        }).populate("messagesId"); 
        return res.status(200).json(conversation?.messagesId);
    } catch (error) {
        console.log(error);
    }
}