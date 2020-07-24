import mongoose from 'mongoose';

import JobModel from '../modules/job/JobModel';
import UserModel from '../modules/user/UserModel';

mongoose.Promise = global.Promise;

export { JobModel, UserModel };
