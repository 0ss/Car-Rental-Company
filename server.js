const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', "Car-Rental-Company" , 'build');

app.use(express.static(publicPath));

console.log(path.join(publicPath, 'index.html'))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
 

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });