import express from 'express';
import {createTicket, EditTicket} from '../controller/ticket.controller.js';
import { getTicket } from '../controller/ticket.controller.js';
import { deleteTicket } from '../controller/ticket.controller.js';
const router = express.Router()

router.post("/" ,createTicket);

router.get("/", getTicket)

router.delete("/:id", deleteTicket )



export default router;