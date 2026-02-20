# Welcome to My First Backend
***

## Task
I need to develop a backend app that will allow users to perform various actions.

## Description
There will be several paths or routes to user requests. Each of the routes will be based on Frank Sinatra, except for two that will be based on public or protected access.

## Installation
I created a file: app.js using doctype. It is used with node.js.

## Usage
The file is divided into three main parts, with the first part dealing with initialization, the second part dealing with the various routes related to Frank Sinatra,
and the last part managing the /protected route.

In the first part, I import the Express library or framework, then I define the port, and finally I make sure that the server “listens” when I launch 
the request in the terminal: node app.js.

In the second part, I manage the various pieces of information about Frank Sinatra using several routes, as requested in the instructions. The routes are for 
his birthday, place of birth, the different women he had relationships with, an image of the person, and finally the last one, which gives a song he recorded.
Each time, I repeat the same method, which is to check if an HTTP GET request has been made and to find out which one. Then I display the path
of the request in the console and return the expected response. For the random song, I will use two functions that will allow me to get a random value, and thanks to this value, 
I will search for the song associated with the index of my list of 20 songs.

In the last part, I will check whether the user has the correct username and password in order to access the “protected” version and authenticate themselves. To do this, I retrieve the authorization from
the request sent by the client. I convert the encoding to base 64 and put it back into a string. I will be able to extract the username and password, and then I just need to check whether
they are what we expect or not. If so, the user can be authenticated; if not, the response will be “not authorized.” 

For the “public” section, I do exactly the same thing as for the information about Frank Sinatra.

### The Core Team


<span><i>Made at <a href='https://qwasar.io'>Qwasar SV -- Software Engineering School</a></i></span>
