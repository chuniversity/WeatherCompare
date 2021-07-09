
const express = require('express');
const pool = require ('./db')
const cors = require('cors')
// const bodyParser = require('body-parser');


const app = express();
const port = 4000;
const path = require('path');


app.use(express.static('dist'));
app.use(express.json());
// app.use(bodyParser.json());
app.use(cors())


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);


app.post('/api/queries', async(req,res) => {
  try {
    const {city1, city2, city3} = req.body;
    const description = [city1, city2, city3]
    const newQuery = await pool.query('INSERT INTO queries (city1, city2, city3) VALUES ($1, $2, $3)', [city1, city2, city3]);
    res.status(200).send("success")
  } catch (err) {
    console.error(err.message)
    res.send(400, err)
  }
});


app.get('/api/queries', async (req, res) => {
  try {
    const allQueries = await pool.query("SELECT * FROM queries")
    res.status(200).send(allQueries.rows)
  } catch (err) {
    console.error(err.message)
    res.send(400, err)
  }
});

