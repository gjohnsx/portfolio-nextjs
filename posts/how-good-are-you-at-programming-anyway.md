---
title: 'How good are you at programming anyway?'
date: '2022-07-27'
description: 'A few thoughts and questions on how to do email marketing for rewards program members better.'
tags: ['Self']
published: true
---
> "Anyone who isn't embarrassed at their old code probably isn't learning enough.”

I feel very comfortable using React, Next.js, and TailwindCSS / TailwindUI components now. I am somewhat comfortable with the basics of Ethers.js integration.

I'd like more practice using Redux, useContext, GraphQL with Apollo, and integration with a database.

## Here are some code examples where I try to tell you how I thought about the problem

I'm sure I'll be embarrassed by these Javascript solutions to Codewars practice problems eventually, but maybe this will give you an insight into my thinking.

### Starting with the easiest

#### 8kyu

Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.

![Code solution for returning the distinct numbers in a given array.](/images/posts/how-good-are-you-at-programming-anyway/distinct.png "Distinct")

- Destructuring to return an array from each of the elements in the new Set
  - Alternative would be to use `Array.from()`
- `new Set` to include only the unique numbers
- O(n) time complexity since we pass through the array once, then destructure the array once which is O(2n) which reduces to O(n)

---

#### 7kyu

Take 2 strings `s1` and `s2` including only letters from a to z.
Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from `s1` or `s2`.

![Code solution for returning the longest string of numbers from 2 arrays.](/images/posts/how-good-are-you-at-programming-anyway/longest.png "Longest")

- Destructuring to return an array from each of the elements in the new Set
- Concat `s1` and `s2` within the new Set constructor
- Sort the Array then join the strings with no whitespace
- O(n log n) time complexity because it's using merge sort

---

#### 6kyu

A [Narcissistic Number](https://www.codewars.com/kata/5287e858c6b5a9678200083c/) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False.

![Code solution for the narcissistic number code problem.](/images/posts/how-good-are-you-at-programming-anyway/narcissistic.png "Narcissistic number")

- Type casting to separate a number into an array of the digits in each place
- `Array.reduce()` to calculate the sum of each digit to the power of the length
- Returns a boolean if narcissistic or not
- O(n) time complexity because `reduce()` is O(n) in this case since we are passing through the list once
