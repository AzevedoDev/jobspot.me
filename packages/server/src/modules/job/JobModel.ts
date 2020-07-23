import mongoose, { Document, Model } from 'mongoose';

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      description: 'Job Title',
      required: true,
    },
    description: {
      type: String,
      description: 'Job description',
      required: true,
    },
    seniority: {
      type: String,
      description: 'Job seniority (entry-level, junior, mid-level and senior)',
      index: true,
      required: true,
    },
    salary: {
      type: Number,
      description: 'Job salary',
      index: true,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'Jobs',
  },
);

Schema.index({ seniority: 'text', salary: 'number' });

export interface IJob extends Document {
  title: string;
  description: string;
  seniority: string;
  salary: number;
}

const JobModel: Model<IJob> = mongoose.model<IJob, Model<IJob>>('Job', Schema);

export default JobModel;
