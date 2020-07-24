import mongoose, { Document, Model } from 'mongoose';
import bcrypt from 'bcryptjs';

const Schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      hidden: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'Users',
  },
);

Schema.index({ email: 'text' });

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  authenticate: (plainTextPassword: string) => boolean;
  encryptPassword: (password: string | undefined) => string;
}

Schema.pre<IUser>('save', function encryptPasswordHook(next) {
  // Hash the password
  if (this.isModified('password')) {
    this.password = this.encryptPassword(this.password);
  }

  return next();
});

Schema.methods = {
  authenticate(plainTextPassword: string) {
    return bcrypt.compareSync(plainTextPassword, this.password);
  },
  encryptPassword(password: string) {
    return bcrypt.hashSync(password, 8);
  },
};

const UserModel: Model<IUser> = mongoose.model<IUser, Model<IUser>>(
  'User',
  Schema,
);

export default UserModel;
