// 主程序
// Create by xiongwei

var util = require( './util');
var List = require( './List');

var movies = util.read( './films.txt');

var movieList = new List();
for( i = 0; i < movies.length; i++) {
    movieList.append( movies[ i]);
}
var customers = new List();
console.log( "Available movies:\n");
util.displayList( movieList);
console.log();

util.checkOut( "Xiongwei", "The Godfather", movieList, customers);
console.log( "Available movies:\n");
util.displayList( movieList);
console.log();
console.log( "customers:\n");
util.displayList( customers);
console.log();
util.checkOut( "Xiongwei", "The Godfather", movieList, customers);
console.log();

util.checkOut( "syt", "The Dark Knight", movieList, customers);
console.log( "Available movies:\n");
util.displayList( movieList);
console.log();
console.log( "customers:\n");
util.displayList( customers);
console.log();
