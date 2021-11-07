require('./env');

const app = require('./app');
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`SIMPLE_PAGE: Listening on port ${port}.`);
});