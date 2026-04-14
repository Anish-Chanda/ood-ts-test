import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

const router = express.Router();
app.use(process.env.PASSENGER_BASE_URI || '/', router);

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
