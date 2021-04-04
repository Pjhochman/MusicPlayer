# BandPlanner [![Activity](https://img.shields.io/github/last-commit/pjhochman/MusicPlayer/main)]()&nbsp;&nbsp;[![Activity](https://img.shields.io/website?url=https%3A%2F%2Fobscure-shore-89574.herokuapp.com%2F)]()

____________________________________________________________________________________________________________________________________________________________________

## Description
SaaS (software as a service) Application for bands to keep track of songs, create setlists and upload files. 
____________________________________________________________________________________________________________________________________________________________________

## About the Project
For this project I decided to dive into fullstack development to deepen my knowledge in the technologies referenced below. This application is written with **Vanilla Javascript** without the use of any framework. It is a fully functional **PWA** (progressive web app) as well as a **SPA** (single page application). I have used 'soft design', best known as '**neumorphism**' in the frontend, getting rid of all flashy aspects of the interface and creating a soft visual that stays consistent throughout the entire product. I'm using **AWS S3 bucket** for file storage and my own **RESTful API** for JSON data storage, making use of Post, Get, Patch and Delete requests. Existing **login authentication** with unauthorized redirection. This project is regarded as a coding playground for learning purposes.
____________________________________________________________________________________________________________________________________________________________________

## Features
#### Upload Tracks
Upload tracks in any audio format (all mimetypes accepted).
#### Edit Tracks 
Swap audio files, move tracks to another playlist or simply edit your information after submission. 
#### Delete Tracks
Delete unwanted tracks (instant removal from AWS bucket).
#### Playlists
Add your tracks to one out of **four** available playlists - Live recording, Home recording, Studio rehearsal or Original track.
#### Track Information
Add song key and information for every song part: Intro, Verse, Bridge, Chorus and Outro.
#### Instant Search Functionality.
Search through all tracks on mobile or currently selected playlist on desktop. 
#### Latest Additions
Find recently added tracks on the home page. 
#### On The Agenda
Create a to do list to manage band practices.
#### Upcoming Gigs
Keep track of booked venues and associated information.
#### Band Practice
Select a date and time for the next band practice. 
#### Bandchat
Chat with band members (with a possibility to delete own messages).
#### Darkmode
Darkmode available on mobile.
____________________________________________________________________________________________________________________________________________________________________

## Technologies

- Node.js
- Javascript
____________

- mongoDB - NoSQL database
- Express - Handling http requests
- Mongoose - Schema modelling & validation
- Multer - Body parser
- Bcrypt - Password encryption
- Morgan - Http request logger
- JsonWebtoken - Token generation (stateless API)
- SASS - CSS extension
____________________________________________________________________________________________________________________________________________________________________

## Project Status
This project is under constant development.
Please check out to the mobile Application for a more complete experience.
____________________________________________________________________________________________________________________________________________________________________

## Author
*Peter Hochman*
____________________________________________________________________________________________________________________________________________________________________

## Login Credentials
Feel free to contact me at peter.hochman.dev@gmail.com
____________________________________________________________________________________________________________________________________________________________________

## Screenshots
<img src="https://user-images.githubusercontent.com/55486572/113491394-bc686a00-94d0-11eb-8a94-58172f38efc9.jpg" width="180" align="left">
<img src="https://user-images.githubusercontent.com/55486572/113491445-2bde5980-94d1-11eb-9c84-33e054fe4619.jpg" width="180" align="left">
<img src="https://user-images.githubusercontent.com/55486572/113491448-2f71e080-94d1-11eb-82b2-a24a01c5125c.jpg" width="180" align="left">
<img src="https://user-images.githubusercontent.com/55486572/113491514-942d3b00-94d1-11eb-9df1-98a206134950.jpg" width="180" align="left">


