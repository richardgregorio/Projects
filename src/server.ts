import express from 'express';
import cors from 'cors'; 
import path from 'path';
import routes from './routes';

const app = express();

app.use(cors());
// em produção, adicionar no interior do cors - { origin: 'www.safego.com.br/portaria' } <- dominio da aplicação FrontEnd
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333); 
