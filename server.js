//Address of the server connected to the internet is: url -> http://localhost:8383
//IP -> 127.0.0.1:8383

const express = require('express')

const app = express()

const PORT = 8383

let data = {
    name: 'James'
}

//ENDPOINT - HTTP Verbs (method) and Routes (paths)
// The method informs the nature of the request and the routes is a further sub directory (basically we direct the request of the body of code to respond appropriately, and these locations are called endpoints)

// Type 1 - Website endpoints (These end points are for sending back html and they typically come when a user enetrs a url in a browser)

app.get('/', (req, res) => {
    res.send(`
        <body 
        style = "background: pink;
        color: blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
    `)
 })
 
 app.get('/dashboard', (req, res) => {
     res.send('<h1>dashboard</h1>')
 })

// Type 2 - API endpoints (non visual)

//CRUD-method create-post read-get update-put and delete-delete

app.get('/api/data', (rq, res) => {
    console.log('This one is for data')
    res.send(data)
})

app.listen(PORT, () => {console.log(`Sever has started on: ${PORT}`)})