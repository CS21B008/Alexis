const express =require('express');
const dotenv = require('dotenv');
const CORS =require('cors');
const signuproute=require('./routes/Signup_route');
const mongoDB=require('./config/DB');
dotenv.config();



mongoDB();

const app = express();
app.use(express.json());
app.use(CORS);
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('hei');
});
//
app.use('/api/user', signuproute);