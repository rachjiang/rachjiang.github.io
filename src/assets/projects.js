const projects = [
 {
    title: "Tomato",
    description: "Tomato is a new and unique way to connect live with your friends and your community. Drop a pin to your precise location with a message, a photo, or a video to broadcast events to your friends and the world.",
    contribution: "Built friend request system with ability to send, accept or remove requests and user authentication with account/profile settings using Google's Firebase.",
    stack: "React Native, Expo, React Native Paper, Firebase, Cloudinary, Google Maps API",
    image: "Tomato.png"
 },
 {
    title: "Ingredient Inspector",
    description: "A food interpreter which lists possible ingredients and their accuracy rates when the user submits a food-image URL.",
    contribution: "Integrated Clarifai's food-recognition AI model into a react app through Node, set up Express route to upload images for ingredient prediction, created react components for image search and prediction results, styled with Bootstrap.",
    stack: "React, Express, Node.js, Clarifai, Bootstrap",
    image: "II.png"
 },
 {
    title: "Pet Play",
    description: "A mock e-commerce website selling pet goodies.",
    contribution: "Loading and viewing cart details for both guests and logged in users, guest checkout page and single product view with add to cart function.",
    stack: "React, Redux, Express, PostgreSQL, Sequelize, Bootstrap",
    image: "pet-play.png"
 }
];

export default projects;