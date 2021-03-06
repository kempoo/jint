/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.3/15.2.3.3-2-16.js
 * @description Object.getOwnPropertyDescriptor - argument 'P' is a number that converts to a string (value is 1(following 20 zeros))
 */


function testcase() {
        var obj = { "100000000000000000000": 1 };

        var desc = Object.getOwnPropertyDescriptor(obj, 100000000000000000000);

        return desc.value === 1;
    }
runTestCase(testcase);
