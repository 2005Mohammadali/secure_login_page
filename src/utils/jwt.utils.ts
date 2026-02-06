import * as jwt from 'jsonwebtoken';
const privateKey = process.env.JWT_SECRET_KEY || 'default_secret_key';

export function signJwt(object: Object, options?: jwt.SignOptions | undefined) {
    return jwt.sign(object, privateKey, {...(options && options), algorithm: "HS256"});
}

export function verifyJwt<T>(token: string): T | null {
    try {
        const decoded = jwt.verify(token, privateKey) as T;
        return decoded;
    } catch (e) {
        console.error('JWT verification failed:', e);
        return null;
    }
}
              


