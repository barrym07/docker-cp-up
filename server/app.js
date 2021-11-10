const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const knex = require('knex')(require('./knexfile.js')[process.env.NODE_ENV || 'development']);
const cors = require('cors');
const Morgan = require('morgan');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(Morgan('dev'))

app.get('/', async (_, res) => {
  try {
    const result = await knex('db')
      .select('*')
      .from('gooby')
    res.status(200).json(result)

  } catch (error) {
    console.log("you suck, here is your error:", error)
    res.status(404).send("something went wrong and we don't know why")

  }
  // res.send("I'm so glad we made it!")
})

app.listen(PORT, () => {
  console.log(`We are live at 5 on port: ${PORT}!`)
})

  //called the docker container express

  //3030:5432 db
  //3001 express
  //3000 react