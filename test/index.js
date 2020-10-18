const YouTube = require("../index");

YouTube.search("indila last dance")
    .then(console.log)
    .catch(console.error);