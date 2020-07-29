/* eslint-disable no-console */
import mongoose from 'mongoose';

import { MONGO_URL } from './config';

declare module 'mongoose' {
  interface ConnectionBase {
    host: string;
    port: number;
    name: string;
  }
}

export default function connectDatabase() {
  return new Promise((resolve, reject) => {
    mongoose.Promise = global.Promise;
    mongoose.connection
      // Reject if an error ocurred when trying to connect to MongoDB
      .on('error', error => {
        console.log('ERROR: Connection to DB failed');
        reject(error);
      })
      // Exit Process if there is no longer a Database Connection
      .on('close', () => {
        console.log('ERROR: Connection to DB lost');
        process.exit(1);
      })
      // Connected to DB
      .once('open', () => {
        // Display connection information
        const infos = mongoose.connections;
        infos.map(info =>
          console.log(`Connected to ${info.host}:${info.port}/${info.name}`),
        );
        // Return successful promise
        resolve();
      });

    mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
  });
}
