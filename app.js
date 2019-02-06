var orm = require("./config/orm.js");

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

orm.select("burger_name", "burgers");

orm.selectWhere("burgers", true);

// Console log all the clients and their parties.
orm.leftJoin(["burger_name"], "burgers", "id",);
