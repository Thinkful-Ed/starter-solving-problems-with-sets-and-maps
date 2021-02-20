## Same Letters

Given a list of words find all words made up of the same letters. Duplicates letters are ok so "tok" and "took" are both made up of the same letters "t", "o" and "k".

The function should return a Map where the keys are strings made up of the letters found in a group of words and the values are arrays consisting of the words that are made up with the same letters in the key.

For example, given the array `["pair", "per", "pole", "pear", "peer", "reap", "lope"]` the result will be

```json
{
  "aipr": ["pair"],
  "elop": ["pole", "lope"],
  "aepr": ["pear", "reap"],
  "epr": ["per", "peer"]
}
```

The characters in the keys should be ordered in alphabetical order.

This should be a case insensitive search.

```
Input: an array of words named words

instantiate a new Map named results

for each word in the words array do:
  lowercase word
  find all unique letters in word
    create a Set with all the letters of the word to remove duplicates
    create an array of letters from the Set and sort alphabetically
    use join to create a string from the array
  if the sorted string of letters is a key in the results Map then
    add word to the array associated with that key
  else
    make a new entry in the results Map with key = sorted string of letters and the value an array with word as its only element
return the results Map
```
