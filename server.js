const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 8000

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

const episodes = {
    1: 'Serenity', 
    2: 'The Train Job', 
    3: 'Bushwhacked', 
    4: 'Shindig', 
    5: 'Safe', 
    6: 'Our Mrs. Reynolds', 
    7: 'Jaynestown', 
    8: 'Out of Gas', 
    9: 'Ariel', 
    10: 'War Stories', 
    11: 'Trash', 
    12: 'The Message', 
    13: 'Heart of Gold', 
    14: 'Objects in Space'
}

app.get('/api/episodes/:epNumber', (request, response) => {
    const epNumber = request.params.epNumber
    response.json(episodes[epNumber])
    console.log(episodes[epNumber])
})