## Find all pairs whose sum is equal to given numbers

Given an array of distinct numbers you wish to find all pairs of numbers in the array that sum to a given number.

For example, suppose you had the array `[3, 2, 4, 6, 7, 5]` and you want to find all pairs of numbers in this array that sum to the value `10`. You can see that the pair `[3, 7]` and the pair `[4, 6]` both sum to `10`. No other pair of numbers sum to `10`. The returned value will be `[[3, 7], [4, 6]]`.

Also note that

- the pair `[4, 6]` and `[6, 4]` are the same and considered just one pair.
- `[5,5]` is not considered a pair since `5` only occurs once in the array. The array does not contain duplicates so this would never be possible.

```
inputs: an array of numbers named A
        a target value named N

initialize a new Map named numbers
initialize a new Map named solution

for each element e in A do:
   add e to numbers

for each element e in A do;
  calculate diff = N - e
  if diff is not equal to e then  (1)
     look up diff in numbers
     if diff is in numbers then
       add [e, diff] to solution (2)

convert solution to an array and return it
```

There are two points to make about this algorithm on the lines denoted (1) and (2).

1. This check ensures that you do not end up with a number paired with itself like `[5, 5]`
2. As it is this will probably result in both `[3, 7]` and `[7, 3]` in the solution. You would want to maybe set the minimum of the two numbers as the key and the other number as the value in the solution map.
