// Export all functions to pig_latin.test.js
module.exports = {lowercase, startsWithVowel, startsWithConsonant, pigLatin, pigLatinLower};


// Convert string to lowercase ("Hello" -> "hello")
function lowercase (string) {
    return string.toLowerCase();
};


// Test if string starts with a vowel
// If true, add "ay" to the end
function startsWithVowel (string) {
    let vowels = "aeiou".split("");
    string = string.toLowerCase();

    if (vowels.includes(string[0])) {
        return string + "way"
    }
};


// Test if string starts with a consonant
// It true, remove characters up to the first vowel
// Move those characters to end of the string and add "ay"
function startsWithConsonant (string) {
    let vowels = "aeiou".split("");
    string = string.toLowerCase();

    if (vowels.includes(string[0])) {
        return string + "way";
    } else {
        let consonants = ""
        for(let i = 0; i < string.length; i++) {
            if (vowels.includes(string[i])) {
                break;
            }
            consonants += string[i]
        } return string.substring(consonants.length) + consonants + "ay"
    } 
};


// Multiple words in our string
// Convert each word to Pig Latin that maintains case
function pigLatin (string) {
    let vowels = "aeiouAEIOU".split("");
    const words = string.split(' ');

    function convertToPigLatin (words) {
    if (vowels.includes(words[0])) {
        return words + "way";
    } else {
        let consonants = ""
        for(let i = 0; i < words.length; i++) {
            if (vowels.includes(words[i])) {
                break;
            }
            consonants += words[i]
        } return words.substring(consonants.length) + consonants + "ay"
    } 
    };

    return words.map(word => convertToPigLatin(word)).join(' ');
};


// Multiple words in our string
// Convert each word to Pig Latin that makes everything lowercase
function pigLatinLower (string) {
    let stringLower = string.toLowerCase();
    let vowels = "aeiouAEIOU".split("");
    const words = stringLower.split(' ');

    function convertToPigLatin (words) {
    if (vowels.includes(words[0])) {
        return words + "way";
    } else {
        let consonants = ""
        for(let i = 0; i < words.length; i++) {
            if (vowels.includes(words[i])) {
                break;
            }
            consonants += words[i]
        } return words.substring(consonants.length) + consonants + "ay"
    } 
    };

    return words.map(word => convertToPigLatin(word)).join(' ');
};