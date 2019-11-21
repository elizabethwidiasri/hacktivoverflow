const mongoose = require('mongoose')
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/hacktiv-overflow'

const mongoConfig = {
  useCreateIndex : true,
  useNewUrlParser : true,
  useFindAndModify : false,
  useUnifiedTopology : true
}

mongoose.connect(`${mongoURI}-${process.env.NODE_ENV}`, mongoConfig, function(err) {
  if (err) {
    console.log(`Databasee connection failed`)
  } else {
    console.log(`Database connection success`)
  }
})