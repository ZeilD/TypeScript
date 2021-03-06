//// [parameterInitializersForwardReferencing1.ts]
let foo: string = "";

function f1 (bar = foo) { // unexpected compiler error; works at runtime
    var foo: number = 2;
    return bar; // returns 1
}

function f2 (bar = (baz = foo) => baz) { // unexpected compiler error; works at runtime
    var foo: number = 2;
    return bar(); // returns 1
}

function f3 (bar = foo, foo = 2) { // correct compiler error, error at runtime
    return bar;
}

function f4 (foo, bar = foo) {
    return bar
}

function f5 (a = a) {
    return a
}

function f6 (async = async) {
    return async
}

function f7({[foo]: bar}: any[]) {
    let foo: number = 2;
}


//// [parameterInitializersForwardReferencing1.js]
var foo = "";
function f1(bar) {
    if (bar === void 0) { bar = foo; }
    var foo = 2;
    return bar; // returns 1
}
function f2(bar) {
    if (bar === void 0) { bar = function (baz) {
        if (baz === void 0) { baz = foo; }
        return baz;
    }; }
    var foo = 2;
    return bar(); // returns 1
}
function f3(bar, foo) {
    if (bar === void 0) { bar = foo; }
    if (foo === void 0) { foo = 2; }
    return bar;
}
function f4(foo, bar) {
    if (bar === void 0) { bar = foo; }
    return bar;
}
function f5(a) {
    if (a === void 0) { a = a; }
    return a;
}
function f6(async) {
    if (async === void 0) { async = async; }
    return async;
}
function f7(_a) {
    var _b = foo, bar = _a[_b];
    var foo = 2;
}
