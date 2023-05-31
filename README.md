# E-commerce Back End Starter Code
# Regular Expression(Regex) Tutorial

In this tutorial, we will break down a regex that is commonly used to determine if an email address is a valid email address. We will break down the different parts of the regex and explain each part's functionality.

## Summary

We will be breaking down a regex for checking the validity of email addresses. This regex can be broken down into three parts. The first part is before the @ sign, the second is after the @ sign, and the third is after the '.' symbol. 

Code snippet: ```/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/```

## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)


## Regex Components

### Anchors
^ $
Anchors determine where in the string part of the pattern should exist.
The two anchors used in the email regex example we've provided are the caret(^) and the dollar($). The caret anchor asserts that the engine's current position in the given string is the beginning of the string. 
That means that ^([a-z0-9]) is saying that at the beginning of the string, we can expect either a character ranging from a to z or characters ranging from 0-9. The dollar sign is effectively the opposite, and signifies the end of the string.

### Quantifiers
+ {}
Quantifiers tell the regex engine to match a certain quantity of the character immediately to its left. For instance in 'A+' the quantifier applies to the character 'A'.
In our email regex example, the plus applies to the [a-z0-9] subexpression of the regex. 
Curly braces ({}) indicate that the subexpression occurs a certain number of times. In our case we have {2-6} which means we should expect 2, 3, 4, 5, or 6 characters.

### OR Operator
In our email regex example, we are not using any OR operators.

### Character Classes
\d
With character classes, we are telling the regex engine to match either a single character, or digit; or a word character, or a whitespace character like a tab or line break. 
In our email regex, we used (\d), which tells the regex engine to match a single character, that is a digit. 

### Grouping and Capturing
()
Parentheses in a regex expression is used to indicate a set of characters in a particular group. In our case, we have three groups. One comes before the @ sign, one that comes after the @ sign and before the period, and one that comes after the period. 

### Bracket Expressions
[]
Bracket expressions are used to give a set of particular characters to match, or a range of potential characters to match. For instance [a-d] is the same as [abcd].
In our email regex, we use a bracket expression to tell the regex engine to look for a charachter ranging from a to z, or a character/integer ranging from 0-9. in the second bracket expression [\da-z\.-], we are telling the engine to look for any digit(0-9), or any letter ranging from a-z, or a period, or a hyphen.
### Greedy and Lazy Match
Greedy matching matches a character pattern as many times as possible, lazy matching matches as few times as possible. The pl
In our example, we use the '+' sign both before, and after the @ sign to tell the engine that there is no limit to how long that part of the email address can be. 

## Author
Cameron Malone - A full stack software engineering student at Georgia Tech's software engineering bootcamp.

github - [cam273364](https://github.com/cam273364)