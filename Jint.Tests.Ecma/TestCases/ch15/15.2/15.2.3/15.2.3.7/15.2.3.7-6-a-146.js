/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-6-a-146.js
 * @description Object.defineProperties - 'O' is an Array, 'name' is the length property of 'O', test TypeError is thrown when the [[Value]] field of 'desc' is an Object that both toString and valueOf wouldn't return primitive value (15.4.5.1 step 3.c)
 */


function testcase() {

        var arr = [];
        var toStringAccessed = false;
        var valueOfAccessed = false;

        try {
            Object.defineProperties(arr, {
                length: {
                    value: {
                        toString: function () {
                            toStringAccessed = true;
                            return {};
                        },

                        valueOf: function () {
                            valueOfAccessed = true;
                            return {};
                        }
                    }
                }
            });

            return false;
        } catch (e) {
            return (e instanceof TypeError) && toStringAccessed && valueOfAccessed;
        }
    }
runTestCase(testcase);
