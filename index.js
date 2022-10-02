const createApp = require('./src/app');

const PORT = process.env.SERVER_PORT || 3000;

const app = createApp();
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
