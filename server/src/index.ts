import express from 'express';
const cors = require('cors');
import userRoutes from './routes/user.routes';

require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors());

app.use('/users', userRoutes);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}!`));
