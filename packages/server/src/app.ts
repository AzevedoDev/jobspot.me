import server from './server';
import connectDatabase from './common/database';

(async () => {
  await connectDatabase();

  server.listen(4000, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running at port 4000 🚀`);
  });
})();
