/*
    Get a response from get /
*/

const express = require('express');     // Importing the express library
const app = express();
const port = 8080;

/*
    Play a random song by Sinata

    const frankSinatraSongs = [ "My Way", "Strangers in the Night", "Fly Me to the Moon", "New York, New York", "I've Got You Under My Skin",
  "The Way You Look Tonight", "Come Fly With Me", "That's Life", "Summer Wind", "Night and Day", "The Lady is a Tramp", "All the Way", "One for My Baby (And One More for the Road)",
  "Luck Be a Lady", "It Was a Very Good Year", "You Make Me Feel So Young", "Witchcraft", "I've Got the World on a String", "Send in the Clowns", "Nice 'n' Easy"]
  
*/

function RandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function RandomSong() {
    const frankSinatraSongs = [ "My Way", "Strangers in the Night", "Fly Me to the Moon", "New York, New York", "I've Got You Under My Skin",
  "The Way You Look Tonight", "Come Fly With Me", "That's Life", "Summer Wind", "Night and Day", "The Lady is a Tramp", "All the Way", "One for My Baby (And One More for the Road)",
  "Luck Be a Lady", "It Was a Very Good Year", "You Make Me Feel So Young", "Witchcraft", "I've Got the World on a String", "Send in the Clowns", "Nice 'n' Easy" ];

    let song_number = RandomValue(0, frankSinatraSongs.length);

    return frankSinatraSongs[song_number];
}

app.get('/', (req, res) => {        // Defining a route -> invoked if HTTP GET request with a path (‘/’). The callback function = a request and a response object as arguments, and simply calls send() on the response to return the string.
    console.log("From the /");
    res.send(RandomSong());
})

app.get('/birth_date', (req, res) => {
    console.log("From the /birth_date");
    res.send('December 12, 1915');
})

app.get('/birth_city', (req, res) => {
    console.log("From the /birth_city");
    res.send('Hoboken, New Jersey, U.S.');
})

app.get('/wives', (req, res) => {       // Format wife1, wife2....
    console.log("From the /wives");
    res.send('Nancy Barbato, Ava Gardner, Mia Farrow, Barbara Marx');
})

app.get('/picture', (req, res) => {
    console.log("From the /picture");
    res.send(`https://en.wikipedia.org/wiki/Frank_Sinatra#/media/File:Frank_Sinatra2,_Pal_Joey.jpg`);
})

app.get('/public', (req,res) => {
    console.log("Everybody can see this page");
    res.send('Everybody can see this page');
})

app.get('/protected', (req, res) => {
    /*
    Check that req.headers.authorization exists and is sent before performing the split    
    */
    const auth = req.get("authorization");
    console.log("Autorisation réussi :", auth);

    if (!auth) {
        res.set('WWW-Authenticate', 'Basic realm="Secure Area"');
        res.status(401).send('Not authorized');
        return;
    }

    const encode = req.headers.authorization.split(" ")[1];
    const bufferObj = Buffer.from(encode, "base64");
    const decodedString = bufferObj.toString("utf-8");
    
    /* console.log(encode);
    console.log(bufferObj);
    console.log(decodedString); */

    username = decodedString.split(':')[0];
    password = decodedString.split(':')[1];

    //console.log(username, password);

    if (username == 'admin' && password == 'admin') {
        res.send('Welcome, authenticated client');
    }

    else {
        res.setHeader('WWW-Authenticate', 'Basic realm="401"');
        res.status(401).send('Not authorized');
    }
})


app.listen(port, () => {       // Start the server on the port. You can go to nav: localhost:port and see the response sent.
    console.log(`Server started, port ${port}`);
})
