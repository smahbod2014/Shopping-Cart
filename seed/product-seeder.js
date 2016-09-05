var mongoose = require('mongoose');
var Product = require('../models/product');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png',
        title: 'Diablo III',
        description: 'A highly hyped game that turned out to be a major disappointment.',
        price: 60
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/2/20/StarCraft_II_-_Box_Art.jpg',
        title: 'Starcraft II',
        description: 'A nice game that pleased newer players and disappointed veteran players.',
        price: 40
    }),
    new Product({
        imagePath: 'http://vignette2.wikia.nocookie.net/ftl/images/3/33/FTL_Title.png/revision/latest?cb=20120618050911',
        title: 'FTL',
        description: 'An unbelievably addicting and amazing space rogue-like strategy game.',
        price: 10
    }),
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/0/00/Final_Fantasy_V_Box_JAP.jpg',
        title: 'Final Fantasy V',
        description: 'An arduous Final Fantasy game full of bullshit and splinters. And the main character\'s name is Butz!',
        price: 15
    }),
    new Product({
        imagePath: 'http://cdn.akamai.steamstatic.com/steam/apps/8930/header.jpg?t=1466015783',
        title: 'Sid Meier,s Civilization V',
        description: 'A civilization game where a \'quick\' game can take up to 8 hours to complete.',
        price: 150
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}