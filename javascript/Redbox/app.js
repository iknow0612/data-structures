// 主程序
// Create by xiongwei

var util = require( './util');
var List = require( './List');

var movies = util.read( './films.txt');

var movieList = new List();
for( i = 0; i < movies.length; i++) {
    movieList.append( movies[ i]);
}
var leasedList = new List();
var customers = new List();
console.log( "Available movies:\n");
util.displayList( movieList);

console.log( "Xiongwei 租赁 The Godfather");
util.checkOut( "Xiongwei", "The Godfather", movieList, leasedList, customers);
display();

console.log( "syt 租赁 The Dark Knight");
util.checkOut( "syt", "The Dark Knight", movieList, leasedList, customers);
display();

console.log( "xw 租赁 The Dark Knight");
util.checkOut( "xw", "The Dark Knight", movieList, leasedList, customers);

console.log( "归还 The Dark Knight");
util.checkIn( "The Dark Knight", movieList, leasedList);
display();

function display(){
    console.log( "Available List:\n");
    util.displayList( movieList);
    console.log( "Leased List:\n");
    util.displayList( leasedList);
    console.log( "customers:\n");
    util.displayList( customers);
}
