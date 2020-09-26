import bcrypt from 'bcryptjs';

const verifyPassword = async (
	normalPassword: string,
	hashedPassword: string
) => {
	return await bcrypt.compare(normalPassword, hashedPassword);
};

export default verifyPassword;
