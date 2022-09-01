# Problem

Consider you are given an array of integers and a target sum, return indices of two numbers in the array such that they add  up to the given target


## Solution 1 - Brute force

Create a nested loop that check does sum of current element and any other element in array matches target.
#### Result
Big O time complexity
O(n^2) - Quadratic- every element in a array needs to be compared to ever other element in nums. 



## Solution 2 - Map
Loop over each element in array. Find whats left when we devide it from target. If left result already exists in previously defined Map return array of current index and previously stored element index. Else store current element and its index in map

#### Result
Big O time complexity
O(n) - Linear- Number of operations is directly equal to number of elements. 


## Commands

`yarn test` - run tests for both solutions