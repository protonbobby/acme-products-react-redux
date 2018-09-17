const express = require('express')

const app = require('./app')
const db = require('./db')

const PORT = process.env.PORT || 8753

app.listen(PORT, () => {
  console.log(`Live at http://localhost/${PORT}`)
})

db.sync_and_seed();
