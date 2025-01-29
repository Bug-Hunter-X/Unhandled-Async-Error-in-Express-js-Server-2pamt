const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    // Error handling that does not explicitly respond to client
    console.error(err);
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that may fail
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        reject(new Error('Something went wrong'));
      } else {
        resolve();
      }
    }, 1000);
  });
}