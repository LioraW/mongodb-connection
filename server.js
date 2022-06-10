const app = require('./index')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const port = 3000

app.use(bodyParser.json())

//import routes
const postRoutes = require('./routes/posts')

app.use('/posts', postRoutes)


//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
        () => console.log('connected to db') 
)

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})