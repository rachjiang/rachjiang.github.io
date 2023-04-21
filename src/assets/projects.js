const projects = [
{
   title: "Nifty Gallery",
   description: "A frontend focused project that allows users to view NFT collections stored on the Ethereum blockchain displayed on a seamless UI.",
   contribution: "Leveraged Moralis's NFT API with Node and Express to fetch NFTs and their metadata. Implemented a clean, user-friendly UI with React and Bootstrap to display collections as a grid of cards and modals to view more details.",
   stack: "React, Node.js, Express, Moralis NFT API, Bootstrap 5",
   image: "NiftyGallery2.png",
   github: "https://github.com/rachjiang/Nifty-Gallery"
},
 {
    title: "Tomato",
    description: "Tomato is a new and unique way to connect in real-time with your friends and community. Drop a pin to your precise location with a message, photo, or video to broadcast events to your friends and the world.",
    contribution: "Designed and developed friend request system with ability to send, accept or remove requests, and user registration/authentication with account and profile settings using Google's Firebase.",
    stack: "React Native, Expo, React Native Paper, Firebase, Cloudinary, Google Maps API",
    image: "Tomato.png",
    github: "https://github.com/team-tomatoes/tomato"
 },
 {
    title: "Ingredient Inspector",
    description: "A food interpreter which lists possible ingredients and their accuracy rates when the user submits a food-image URL.",
    contribution: "Integrated Clarifai's food-recognition AI model into a react app through Node, set up Express route to upload images for ingredient prediction, created react components for image search and prediction results, styled with Bootstrap.",
    stack: "React, Express, Node.js, Clarifai, Bootstrap 4",
    image: "II.png",
    github: "https://github.com/rachjiang/Ingredient-Inspector",
 },
 {
    title: "Pet Play",
    description: "A mock e-commerce website selling pet goodies.",
    contribution: "Loading and viewing cart details for both guests and logged in users, guest checkout page and single product view with add to cart function.",
    stack: "React, Redux, Express, PostgreSQL, Sequelize, Bootstrap 4",
    image: "pet-play.png",
    github: "https://github.com/grace-shopper-beetle/pet-play"
 }
];

export default projects;