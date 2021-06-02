import { getClient } from '../db';
import { ObjectId } from 'mongodb';
import Cartitems from '../model/Cartitems';
import express from 'express';

const route = express.Router()

route.get("/", async (req, res) => {
    try {
      const client = await getClient();
      const results = await client.db().collection<Cartitems>('cartItems').find().toArray();
      res.json(results); 
    } catch (err) {
      console.error("FAIL", err);
      res.status(500).json({message: "Internal Server Error"});
    }
  });

  export default route;