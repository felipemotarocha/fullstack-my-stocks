import { Request, Response, NextFunction } from 'express';
import { getConnection } from 'typeorm';
import jwt from 'jsonwebtoken';
import { User } from '../entity/User';

const auth = async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (!req.header('Authorization')) throw new Error();

		const token = req.header('Authorization')!.replace('Bearer ', '');
		const decoded: any = jwt.verify(token, process.env.JWT_SIGNATURE!);

		const user = await getConnection()
			.createQueryBuilder()
			.select('user')
			.from(User, 'user')
			.where('user.id = :id', { id: decoded.userId })
			.getOne();

		if (!user) throw new Error();

		req.user = user;
		next();
	} catch (err) {
		res.status(401).send('Please authenticate and try again.');
	}
};

export default auth;
