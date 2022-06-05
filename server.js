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
    1: {
        'title': 'Serenity', 
        'synopsis': 'In desperate times, the crew of Serenity is transporting passengers to another planet, only to discover that one of them has smuggled something strange in their cargo.' 
    },
    2: {
        'title': 'The Train Job', 
        'synopsis': 'The Serenity crew is coerced into pulling a train robbery.  When they discover the stolen cargo is actually medicine intended for refugees, they are forced to reevaluate their priorities.' 
    }, 
    3: {
        'title': 'Bushwhacked',
        'synopsis': 'The Serenity crew drifts upon the ruins of a colony ship and goes on a salvage mission. The expedition turns from bad to worse when the entire crew massacred... except for one.' 
    },
    4: {
        'title': 'Shindig',
        'synopsis': 'On a mission to transport some goods on the planet Persephone, the Serenity crew attend a ball where Mal finds himself at odds with one of Inara\'s "clients".'
    },
    5: {
        'title': 'Safe', 
        'synopsis': 'Things go terribly wrong during a job on an outer planet; both Simon and River are kidnapped by the locals in need of a doctor, while the rest of the crew finds themselves in need a doctor of their own.'
    },
    6: {
        'title': 'Our Mrs. Reynolds',
        'synopsis': 'Mal unwittingly marries a beautiful village girl during a job in the backwater.  But the surprises don\'t end there.  Christina Hendricks guest stars.'
    }, 
    7: {
        'title': 'Jaynestown', 
        'synopsis': 'The Serenity crew pulls a job in a town where Jayne once made some friends and few lifelong enemies.'
    },
    8: {
        'title': 'Out of Gas', 
        'synopsis': 'The Serenity engine explodes, leaving the crew low on oxygen and adrift in deep space.'
    },
    9: {
        'title': 'Ariel',
        'synopsis': 'On return to Ariel, Simon hires the crew out to smuggle River into a hospital so Simon can figure out what the Alliance did to her.'
    }, 
    10: {
        'title': 'War Stories', 
        'synopsis': 'Tensions begin to run high on board the Serenity when Wash finds himself feeling threatened by the closeness between Mal and Zoe.'
    },
    11: {
        'title': 'Trash',
        'synopsis': 'Mal has to make a tough choice in whether he should trust Saffron when she offers the Serenity crew an opportunity to make a lot of money on a risky job.'
    }, 
    12: {
        'title': 'The Message', 
        'synopsis': 'What starts out as a nice day at a space station goes very wrong when Mal and Zoe receive the corpse of their old war buddy in the mail.'
    },
    13: {
        'title': 'Heart of Gold', 
        'synopsis': 'The Serenity goes to the moon of Deadwood to answer a distress call from Inara\'s old friend who runs a brothel.'
    },
    14: {
        'title': 'Objects in Space',
        'synopsis': 'A bounty hunter named Jubal Early sets his sites on capturing River Tam and manages to sneak aboard the Serenity in deep space.'
    }
}

app.get('/api/episodes/:epNumber', (request, response) => {
    const epNumber = request.params.epNumber
    if (episodes[epNumber]) {
        response.json(episodes[epNumber])
    } else {
        throw new Error('Episode not found')
    }
})