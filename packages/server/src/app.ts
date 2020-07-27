import server from './server';
import connectDatabase from './common/database';

import { PORT } from './common/config';

(async () => {
  await connectDatabase();

  server.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running at port ${PORT} 🚀`);
  });
})();
