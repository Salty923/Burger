var connection = require("./connection.js");

var Burger = function (name, devoured) {
    this.name = burger_name;
    this.devoured = devoured;
}


Burger.all = function (cb) {
    connection.query("SELECT * FROM BURGERS;",cb);
}

Burger.prototype.create = function (cb) {
    var bugerdata ={
        burger_name: this.name,
        devoured: this.devoured
    };
    connection.query("INSERT INTO BURGERS SET ?", burgerdata,cb);
}


Burger.update = function (burger, update, cb) {
    var updated ={
        burger_name: this.name,
        devoured: this.devoured
    };
    connection.query("UPDATE BUGERS SET ? WHERE ?")
}


module.exports = Burger;