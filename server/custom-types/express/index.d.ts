declare namespace Express {
	interface Request {
		user: any;
	}
}

declare namespace NodeJS {
	export interface ProcessEnv {
		JWT_SIGNATURE: string;
	}
}
