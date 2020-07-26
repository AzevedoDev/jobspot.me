import mongoose, { Document, Model } from 'mongoose';

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      description: 'Job Title',
      required: true,
      index: true,
    },
    company: {
      type: String,
      description: 'Job company',
      required: true,
    },
    location: {
      type: String,
      description: 'Job location',
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
      required: true,
    },
    salary: {
      type: Number,
      description: 'Job salary',
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

Schema.index({ title: 'text' });

export interface IJob extends Document {
  title: string;
  description: string;
  location: string;
  company: string;
  seniority: string;
  salary: number;
}

const JobModel: Model<IJob> = mongoose.model<IJob, Model<IJob>>('Job', Schema);

export default JobModel;
