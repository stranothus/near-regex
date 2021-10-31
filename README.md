# Near-RegEx

Near-RegEx is a tool to make matching user inputs easier than ever before. Users may try to evade filters or simply "be cool" and use nonstandard variations of a character. You shouldn't need to write RegEx for every possibility, so Near-RegEx does it for you from an exhaustive list of possibilities

## Install

`npm install near-regex`

## Usage

```JS
const pattern = NearMatch("near-regex"); // creates a RegEx formatted string to match hundreds of possible variations
const regex = new RegExp(pattern, "i"); // turn the string pattern into a regular expression and add in additional string without near matching you want
console.log(regex.test("Ṋ34Ꝛ-ℛɇℊ℮ℵ")); // watch in wonder as the Near-RegEx finds matches you couldn't have otherwises
```

## Type of output

`NearMatch` returns a string output with all variations of a character within a range. For example, `"[hⒽⓗ⒣HhḢḣḤḥḦḧḨḩḪḫĤĥȞȟĦħⱧⱨꜦℍǶẖℏℎℋℌꜧ]"` would be the result of `"h"`. Characters without recorded variants such as numbers and punctuation are left as-is. Characters detected as escaped are not matched for variants and appear in the output as they were in the input

## Some characters are missing??

There are, undoubtably, missing characters. Lists of characters, if extensive, should be submitted in an issue. Complaints not accompanied by a list of missing characters will be ignored