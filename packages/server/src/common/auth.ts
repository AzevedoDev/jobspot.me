import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { Types } from 'mongoose';
import { UserModel } from '../models';
import { IUser } from '../modules/user/UserModel';
import { SECRET } from './config';

interface CreateTokenInput {
  email: string;
  _id: Types.ObjectId;
}

interface TokenDataPayload {
  email: string;
  userId: Types.ObjectId;
}

const createToken = ({ email, _id }: CreateTokenInput): string =>
  jwt.sign({ email, userId: _id }, SECRET);

const getUserFromToken = async (token: string): Promise<IUser | null> => {
  try {
    const user = jwt.verify(token, SECRET) as TokenDataPayload;
    return UserModel.findById(user.userId);
  } catch (err) {
    return null;
  }
};

const hashPassword = (password: string): string => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
};

const comparePassword = (password: string, hash: string): boolean => {
  return bcrypt.compareSync(password, hash);
};

export { createToken, getUserFromToken, hashPassword, comparePassword };
