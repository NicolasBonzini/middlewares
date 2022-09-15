const express = require('express')
const app = express()
const port = 4000
const requestLog = require('./middlewares/requestLog.js')
const userAgent = require('./middlewares/userAgent.js')

const appRouter = require('./routes/mainRouter')

app.set('views', './views')
  app.set('view engine', 'ejs')

app.use(express.static('public'))
  .use(requestLog)
  .use(userAgent)

app.use('/', appRouter)
  .use((req, res) => {
    res.status(404).render('404')
  })


app.listen(port, () => { console.log(`Listen in ${port}`) })
