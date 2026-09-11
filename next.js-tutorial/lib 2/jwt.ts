import jwt from 'jsonwebtoken';

const SECRET= "MY-SECRET_KEY";

export const generateToken = (payload: object)=>
    {
 return jwt.sign(payload, SECRET, { expiresIn: '1h' });   
}

export const verifyToken = (token: string) =>
{
    return jwt.verify(token, SECRET);
}
