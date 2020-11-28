import express from 'express';
import bodyParser from 'body-parser';
// import users from './users/routes';

const app = express();
app.use(bodyParser.json());
// app.use('/', users);

app.get('/', (req, res) => {
  res.send('Welcome to Node Babel');
});

app.listen(process.env.PORT || 8000, () => {
  // eslint-disable-next-line no-console
  console.log('app is listening to port 8001');
});
