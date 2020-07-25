const app = require('express')()
const bodyParser = require('body-parser')

const mainRouter = require('./src/routes')

// Initialize App
app.listen(3030, () => {
  console.log('\n This server is running on port 3030')
})
// Body parser for parse JSON into Object
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', mainRouter)
