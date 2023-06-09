
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';
import commentsRouter from './router/comments.router.js'
import userRouter from './router/user.router.js'
import productsRouter from './router/products.router.js';
import deckRouter from './router/deck.router.js';
import cookieParser from "cookie-parser";

class Server{

    private app: express.Express

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    private config(){
        dotenv.config();
        this.app.use(cors({
            origin: process.env.CLIENT_HOST! || '*',
            credentials: true
        }));
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(morgan('dev'));
        this.app.use(cookieParser());
    }

    private routes(){
        //this.app.use(informesRouter.router);
        this.app.use(userRouter.router);
        this.app.use(commentsRouter.router);
        this.app.use(productsRouter.router);
        this.app.use(deckRouter.router);

    }

    private start(){
        this.app.listen(parseInt(process.env.API_PORT!), process.env.API_HOST!, ()=>{
            console.log(`Listen on http://${process.env.API_HOST}:${process.env.API_PORT}/`);
        });
    }
}

new Server();