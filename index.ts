
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import commentsRouter from './src/router/comments.router.js'
import userRouter from './src/router/user.router.js'
import productsRouter from './src/router/products.router.js';
var cookieParser = require ('cookie-parser');

class Server{

    private app: express.Express

    constructor(){
        this.app = express();
        this.config();
        this.routes();
        this.start();
    }

    private config(){
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

    }

    private start(){
        this.app.listen(parseInt(process.env.API_PORT!), process.env.API_HOST!, ()=>{
            console.log(`Listen on http://${process.env.API_HOST}:${process.env.API_PORT}/`);
        });
    }
}

new Server();