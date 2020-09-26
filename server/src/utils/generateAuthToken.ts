import jwt from 'jsonwebtoken';

const generateAuthToken = async (userId: number) => {
	return await jwt.sign({ userId }, process.env.JWT_SIGNATURE!);
};

export default generateAuthToken;
