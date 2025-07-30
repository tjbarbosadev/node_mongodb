import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017/node';

const client = new MongoClient(url);

const run = async () => {
  try {
    await client.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.log(err);
  }
};

run();

export default client;
