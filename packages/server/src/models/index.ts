import mongoose from 'mongoose';

import JobModel from '../modules/job/JobModel';

mongoose.Promise = global.Promise;

export { JobModel };
