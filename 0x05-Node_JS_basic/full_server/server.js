const express = require('express');
const routes = require('./routes/index');

/**
 * Small Express server using the routes defined in 'full_server/routes/index.js'.
 */
const app = express();
const port = 1245;

// Use the routes defined in 'full_server/routes/index.js'.
app.use(routes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
