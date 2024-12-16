import express, { Request, Response } from 'express';
import produtoRoutes from './routes';
import "reflect-metadata"
import { AppDataSource } from './db/data-source';

AppDataSource.initialize()
    .then(() => {
        const app = express();

        app.use(express.json());

        app.use('/', produtoRoutes)
        
        app.listen(3000, () => console.log("Server on"));
    })
    .catch((error) => console.log('Erro na inicialização do banco de dados:', error));
