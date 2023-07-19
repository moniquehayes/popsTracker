const port = process.env.PORT || 3005;
const app = require('./app');

app.listen(port, () => console.log(`listening on port ${port}`))