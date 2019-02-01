'use strict';

const test = require('tape');
const { 
        det 
    } = require('./determinant');

test("1=1", (t)=>{
    t.equals(1,1, "1=1");
    t.end();
})

test("Throws error when input is not an array", (t)=>{
    // t.throws(() => combinedLength(), TypeError, 'Calling combinedLength with no arguments should throw a new TypeError');

        t.throws(()=> det([1,3],[2,4]), -2, "Should receive error message");
        t.end();
    
});

// test('Throws error when any element of matrix is not an array', (t)=>{
//     t.throws(()=>det([[1,2],'Not an array']), TypeError, "Should receive error message");
//     t.end();
// })

// test('Throws error when matrix is not square matrix',(t)=>{
//     t.equals(det([[1,3,4],[1,9,2]]),);
//     t.end('Please input square array');
// })

test("det calulates determinant",(test)=>{
    test.test('asha', (t)=>{
    det( [[1,3],[2,4]], (err,res) => {
        t.notOk(err, 'Could not compute array');
        t.equals(res, -2, 'the determinant of [[1,2],[3,4]] is -2');
        t.end();
    });
});
})
test("det calulates determinant",(test)=>{
    test.test('asha', (t)=>{
    det( [[3,2,1],[2,-1,-3],[-1,2,-4]], (err,res) => {
        t.notOk(err, 'Could not compute array');
        t.equals(res, 55, 'the determinant of [[3,2,1],[2,-1,-3],[-1,2,-4]] is 55');
        t.end();
    });
});
})
test("det calulates determinant",(test)=>{
    test.test('asha', (t)=>{
    det( [[3,2,1],[2,-1,-3],[-1,2,-4]], (err,res) => {
        t.notOk(err, 'Could not compute array');
        t.equals(res, 55, 'the determinant of [[3,2,1],[2,-1,-3],[-1,2,-4]] is 55');
        t.end();
    });
});
})