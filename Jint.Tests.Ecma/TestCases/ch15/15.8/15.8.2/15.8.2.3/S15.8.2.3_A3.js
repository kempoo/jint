// Copyright 2009 the Sputnik authors.  All rights reserved.
/**
 * If x is less than -1, Math.asin(x) is NaN
 *
 * @path ch15/15.8/15.8.2/15.8.2.3/S15.8.2.3_A3.js
 * @description Checking if Math.asin(x) is NaN, where x is less than -1
 */

// CHECK#1
var x = -1.000000000000001;
if (!isNaN(Math.asin(x)))
{
	$ERROR("#1: 'var x = -1.000000000000001; isNaN(Math.asin(x)) === false'");
}

// CHECK#2
x = -2;
if (!isNaN(Math.asin(x)))
{
	$ERROR("#2: 'x = -2; isNaN(Math.asin(x)) === false'");
}

// CHECK#3
x = -Infinity;
if (!isNaN(Math.asin(x)))
{
	$ERROR("#3: 'x = -Infinity; isNaN(Math.asin(x)) === false'");
}

