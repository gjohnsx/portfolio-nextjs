---
title: 'How good are you at programming anyway?'
date: '2022-08-09'
description: 'Get some insight into how I solve problems, and where my skills are at now.'
tags: ['Self']
image: { 
    src: '/images/posts/how-good-are-you-at-programming-anyway/cover-photo-2.png',
    height: 628,
    width: 1200,
    alt: 'Just how good am I currently at programming? And where do I see myself going from here?',
    figcaption: 'Midjourney prompt: man from behind, 2 monitors facing him on his desk. natural light coming in, and with plants hanging. the man is coding on his computer',
    link: ''
}
published: true
---
> "Anyone who isn't embarrassed at their old code probably isn't learning enough.”

I feel very comfortable using React, Next.js, and TailwindCSS / TailwindUI components now. I am somewhat comfortable with the basics of Ethers.js integration.

I'd like more practice using Redux, useContext, GraphQL with Apollo, and integration with a database.

## Here are some code examples where I try to tell you how I thought about the problem

I'm sure I'll be embarrassed by these Javascript solutions to Codewars practice problems eventually, but maybe this will give you an insight into my thinking.

### Starting with the more difficult problems

#### 5kyu

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
`moveZeros([false,1,0,1,2,0,1,3,"a"])`
returns[false,1,1,2,1,3,"a",0,0]

![Code solution for the moveZeroes code problem.](/images/posts/how-good-are-you-at-programming-anyway/moveZeroes.png "Move zeroes")

- Go through the array one time and check if it's zero or not (O(n))
- Destructure the new arrays and return one new array (O(2n))
- O(n) time complexity

---

#### 6kyu

A [Narcissistic Number](https://www.codewars.com/kata/5287e858c6b5a9678200083c/) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base.
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. This may be True and False.

![Code solution for the narcissistic number code problem.](/images/posts/how-good-are-you-at-programming-anyway/narcissistic.png "Narcissistic number")

- Type casting to separate a number into an array of the digits in each place
- `Array.reduce()` to calculate the sum of each digit to the power of the length
- Returns a boolean if narcissistic or not
- O(n) time complexity because `reduce()` is O(n) in this case since we are passing through the list once

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

#### 8kyu

Define a function that removes duplicates from an array of numbers and returns it as a result.
The order of the sequence has to stay the same.

![Code solution for returning the distinct numbers in a given array.](/images/posts/how-good-are-you-at-programming-anyway/distinct.png "Distinct")

- Destructuring to return an array from each of the elements in the new Set
  - Alternative would be to use `Array.from()`
- `new Set` to include only the unique numbers
- O(n) time complexity since we pass through the array once, then destructure the array once which is O(2n) which reduces to O(n)
