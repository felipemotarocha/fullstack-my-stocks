import { Request, Response, Router } from 'express';
import { createConnection } from 'typeorm';

import { User } from '../entity/User';
import hashPassword from '../utils/hashPassword';
import generateAuthToken from '../utils/generateAuthToken';
import verifyPassword from '../utils/verifyPassword';

const router = Router();

createConnection().then((connection) => {
	const userRepository = connection.getRepository(User);

	router.get('/', async (_req: Request, res: Response) => {
		const users = await userRepository.find();
		res.send(users);
	});

	router.get('/:id', async (req: Request, res: Response) => {
		const user = await userRepository.findOne(req.params.id);
		res.send(user);
	});

	router.post('/', async (req: Request, res: Response) => {
		try {
			req.body.password = await hashPassword(req.body.password);

			const user = await userRepository.create(req.body);
			const savedUser = await userRepository.save(user);
			return res.send(savedUser);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	});

	router.post('/login', async (req: Request, res: Response) => {
		try {
			const { email, password } = req.body;

			const user = await userRepository
				.createQueryBuilder()
				.select('user')
				.from(User, 'user')
				.where('user.email = :email', { email })
				.getOne();

			if (!user) throw new Error('Something went wrong.');

			if (!(await verifyPassword(password, user.password)))
				throw new Error('Something went wrong');

			const token = await generateAuthToken(user.id);
			console.log(token);

			return res.send(user);
		} catch (err) {
			return res.status(500).send(err.message);
		}
	});
});

export default router;
