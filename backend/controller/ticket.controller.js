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
