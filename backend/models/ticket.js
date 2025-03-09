import mongoose, {Schema} from "mongoose";


const ticketSchema = new Schema(
    {
     title: String,
     description:String,
     category:String,
     priority:Number,
     progress:Number,
     status:String,
     active:Boolean,
},
{
    timestamps:true,

}
);
const Ticket = mongoose.model("Tickets", ticketSchema)
export default Ticket;