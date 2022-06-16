if(process.env.NODE_ENV === "PRODUCTION"){
    module.exports = require("./prods")
}else{
    module.exports = require('./dev');
}


