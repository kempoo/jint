/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.7/15.2.3.7-5-b-233.js
 * @description Object.defineProperties - 'set' property of 'descObj' is inherited accessor property (8.10.5 step 8.a)
 */


function testcase() {
        var data = "data";
        var setFun = function (value) {
            data = value;
        };
        var proto = {};
        Object.defineProperty(proto, "set", {
            get: function () {
                return setFun;
            }
        });

        var Con = function () { };
        Con.prototype = proto;

        var child = new Con();
        var obj = {};

        Object.defineProperties(obj, {
            prop: child
        });
        obj.prop = "overrideData";

        return obj.hasOwnProperty("prop") && data === "overrideData";

    }
runTestCase(testcase);
