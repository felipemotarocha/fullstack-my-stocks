import express from 'express';
import userRoutes from './routes/user.routes';

require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/users', userRoutes);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
