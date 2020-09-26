import express from 'express';
import { Request, Response } from 'express';
import { createConnection } from 'typeorm';

import { User } from './entity/User';
import hashPassword from '../utils/hashPassword';

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
			req.body.password = await hashPassword(req.body.password);

			const user = await userRepository.create(req.body);
			const savedUser = await userRepository.save(user);
			return res.send(savedUser);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	});

	app.post('/login', async (req: Request, res: Response) => {
		try {
			const user = await userRepository
				.createQueryBuilder()
				.select('user')
				.from(User, 'user')
				.where('user.email = :email', { email: req.body.email })
				.getOne();

			if (!user) throw new Error('User not found!');

			return res.send(user);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	});

	const port = 5000;
	app.listen(port, () => console.log(`Listening on port ${port}!`));
});
