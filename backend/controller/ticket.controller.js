import Ticket from './../models/ticket.js';

export const createTicket = async(req,res) =>{
    try{
 const ticket  = new Ticket(req.body);
 await ticket.save();
 res.status(201).json(ticket);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};


export const getTicket = async(req,res)=>{
    try{
const ticket = await Ticket.find()
res.status(200).json(ticket)
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

export const deleteTicket = async (req,res)=>{
    try{
        const id= req.params.id;
const ticket = await Ticket.findByIdAndDelete(id);
res.status(200).json({message: "Ticket deleted succesfully"})
    }catch(error){
        res.status(400).json({message: error.message});
    }

}

