import { User } from './entity/User';
import express from 'express';
import { Request, Response } from 'express';
import { createConnection } from 'typeorm';

createConnection().then((connection) => {
	const userRepository = connection.getRepository(User);

	// Express configuration
	const app = express();
	app.use(express.json());

	// Routes
	app.get('/users', async (_req: Request, res: Response) => {
		const users = await userRepository.find();
		res.send(users);
	});

	app.get('/users/:id', async (req: Request, res: Response) => {
		const user = await userRepository.findOne(req.params.id);
		res.send(user);
	});

	app.post('/users', async (req: Request, res: Response) => {
		try {
			const user = await userRepository.create(req.body);
			const savedUser = await userRepository.save(user);
			return res.send(savedUser);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	});

	const port = 5000;
	app.listen(port, () => console.log(`Listening on port ${port}!`));
});
