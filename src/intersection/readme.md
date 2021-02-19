# Intersection of arrays

Suppose you were given two arrays, `a` and `b`, and you needed to find all elements that are present in both arrays. This is a common problem that turns up in many applications.

For example:

| **Inputs**                                                       | **Output**             | **Explanation**                                                                                                                                                                                                                  |
| ---------------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `a = [10, 20, 30, 40, 50]`, `b = [50, 40, 30, 20, 10]`           | `[10, 20, 30, 40, 50]` | All the elements in array `a` are also present in array `b`.                                                                                                                                                                     |
| `a = ['A', 'B', 'C', 'A', 'D']`, `b = ['A', 'A', 'E', 'C', 'D']` | `['A', 'C', 'D']`      | Even though `'A'` appears twice in both arrays it only occurs once in the output. `'B'` is in the first array but not the second and `'E'` is in the second but not the first. Hence these elements do not appear in the output. |

## Pseodocode

```
initialize a new Map
result = []
for each element e of a do:
  add e to the Map

for each element e of b do:
  lookup e in the Map
  if e is in the Map then
    add e to the result array
return result
```
