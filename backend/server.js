import app from "./src/app.js";

const PORT = process.env.PORT || 3000;
const HOSTNAME = '127.0.0.1';

app.listen(PORT, () => {
    console.log(`app running at http://${HOSTNAME}:${PORT}`)
});