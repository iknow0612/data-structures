// 工具函数
// Create by xiongwei

fs = require( 'fs');
Customer = require( './Customer');

// 读取影碟列表
// 去除前后空格，返回 Array
module.exports.read = function( file) {
    var arr = fs.readFileSync( file, 'utf-8').replace( /\n$/, '').split( '\n');
    for( var i = 0; i < arr.length; i++) {
        arr[ i] = arr[ i].trim();
    }
    return arr;
}

// 查看清单
// 查看影碟清单和租赁用户清单
module.exports.displayList = function( list) {
    for( list.front(); list.currPos() < list.length(); list.next()) {
        if( list.getElement() instanceof Customer) {
            console.log( list.getElement().name + ", " + list.getElement().movie);
        } else {
            console.log( list.getElement());
        }
    }
}

// 租凭函数
// 检查影碟列表，可以租凭则删除该元素，同时加入客户列表
module.exports.checkOut = function( name, movie, movieList, customerList) {
    if( movieList.contains( movie)) {
        var c = new Customer( name, movie);
        customerList.append( c);
        movieList.remove( movie);
    } else {
        console.log( movie + " is not available.");
    }
}
