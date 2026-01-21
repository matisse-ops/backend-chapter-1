//Address of the server connected to the internet is: url -> http://localhost:8383
//IP -> 127.0.0.1:8383

const express = require('express')

const app = express()

const PORT = 8383

let data = ['James']

//Middleware - (configures server to expect json as an a request)
app.use(express.json())


//ENDPOINT - HTTP Verbs (method) and Routes (paths)
// The method informs the nature of the request and the routes is a further sub directory (basically we direct the request of the body of code to respond appropriately, and these locations are called endpoints)

// Type 1 - Website endpoints (These end points are for sending back html and they typically come when a user enetrs a url in a browser)

app.get('/', (req, res) => {
    console.log('User requested the homepage site')
    res.send(`
        <body 
        style = "background: pink;
        color: blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log("This is my script")</script>
    `)
 })
 
 app.get('/dashboard', (req, res) => {
     res.send(`
        <body>
            <h1>dashboard</h1>
            <a href="/">Home</a>
        </body>
     
     
        `)
 })

// Type 2 - API endpoints (non visual)

//CRUD-method create-post read-get update-put and delete-delete

app.get('/api/data', (rq, res) => {
    console.log('This one is for data')
    res.status(777).send(data)
})

app.post('/api/data', (req, res) => {
    //Someone wants to create a user (for example when they click a sign up button)
    //User clicks the sign up button after entering their credentials and their browser is wired up to send out a network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/endpoint', (req, res) => {
    data.pop()
    console.log('We deleted the element at the end of the array')
    res.sendStatus(204)
})



app.listen(PORT, () => {console.log(`Sever has started on: ${PORT}`)})