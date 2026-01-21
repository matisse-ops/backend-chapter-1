const express =  require('express')

const app = express()

const PORT = 8383

app.listen(PORT, () => {console.log(`Sever has started on: ${PORT}`)})