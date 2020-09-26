import { Secret } from 'jsonwebtoken';

declare namespace NodeJS {
	export interface ProcessEnv {
		JWT_SIGNATURE: Secret;
	}
}
