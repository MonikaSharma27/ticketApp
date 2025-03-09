import Ticket from './../models/ticket.js';

export const createTicket = async(req,res) =>{
    try{
 const Ticket  = new Ticket(req.body);
 await Ticket.save();
 res.status(201).json(Ticket);
    }catch(error){
        res.status(400).json({message: error.message});
    }
};
