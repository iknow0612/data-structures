// 栈的实现
// nodejs
// create by xiongwei

function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

// 入栈
function push( element) {
    this.dataStore[ this.top++] = element;
}

// 出栈
function pop() {
    return this.dataStore[ --this.top];
}

// 返回栈顶元素
function peek() {
    return this.dataStore[ this.top - 1];
}

// 栈元素数量
function length() {
    return this.top;
}

// 清空栈
function clear() {
    this.top = 0;
}

module.exports = Stack;
