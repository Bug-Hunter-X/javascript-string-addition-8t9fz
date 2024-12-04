# Unexpected String Concatenation in JavaScript Addition

This repository demonstrates a common, yet often overlooked, error in JavaScript: the unexpected string concatenation that occurs when adding a number and a string.  The bug showcases how JavaScript implicitly converts numbers to strings when performing the '+' operator with strings, resulting in string concatenation instead of numerical addition.

The solution provided shows how to correctly add numbers and strings in JavaScript by explicitly converting both operands to numbers before performing the addition using `parseInt()`.  This avoids unexpected results and ensures correct numerical calculations.