import bcrypt from 'bcryptjs';

const hashPassword = async (password: string) => {
	return await bcrypt.hash(password, 8);
};

export default hashPassword;
