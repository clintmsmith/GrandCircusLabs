// Import functions from my pig_latin.js file to be tested
let main = require('./pig_latin');

// Additional Build Specifications 1 - test that the function converts a word to lowercase before translating
describe('lowercase function', () => {
    test('The string "Hello" is converted to lowercase "hello" before translating', () => {
        let testLowercase1 = main.lowercase("Hello");
        expect(testLowercase1).toBe("hello");
    });
   
    test('The string "Goodbye" is converted to lowercase "goodbye" before translating', () => {
        let testLowercase2 = main.lowercase("goodBye");
        expect(testLowercase2).toBe("goodbye");
    });
    
    test('The string "SPACE" is converted to lowercase "space" before translating', () => {
        let testLowercase3 = main.lowercase("SPACE");
        expect(testLowercase3).toBe("space");
    });
});


// Additional Build Specifications 2 - test that if a string starts with a vowel, then just add "ay" onto the ending
describe('starts with vowel function', () => {
    test('If a string starts with a vowel "a", then just add "ay" to the end of the word', () => {   
        let testStartsWithVowel3 = main.startsWithVowel("apple");
        expect(testStartsWithVowel3).toBe("appleway");
    });

    test('If a string starts with a vowel "e", then just add "ay" to the end of the word', () => {
        let testStartsWithVowel2 = main.startsWithVowel("ends");
        expect(testStartsWithVowel2).toBe("endsway");
    }); 

    test('If a string starts with a vowel "i", then just add "ay" to the end of the word', () => {
        let testStartsWithVowel2 = main.startsWithVowel("inner");
        expect(testStartsWithVowel2).toBe("innerway");
    }); 

    test('If a string starts with a vowel "o", then just add "ay" to the end of the word', () => {
        let testStartsWithVowel1 = main.startsWithVowel("open");
        expect(testStartsWithVowel1).toBe("openway");
    });    

    test('If a string starts with a vowel "u", then just add "ay" to the end of the word', () => {
        let testStartsWithVowel2 = main.startsWithVowel("under");
        expect(testStartsWithVowel2).toBe("underway");
    }); 
});


// Additional Build Specifications 3 - test that if a string starts with a consonant, move all consonants that appear before
// the first vowel to the end of the word, then add "ay" to the end of the word
// The pig_latin.js code also covers if it starts with more than one consonant
describe('starts with consonant function', () => {
    test('The string "latin" in English becomes "atinlay" in Pig Latin', () => {
        let testStartsWithConsonant3 = main.startsWithConsonant("latin");
        expect(testStartsWithConsonant3).toBe("atinlay");
    });

    test('The string "hello" in English becomes "ellohay" in Pig Latin', () => {
        let testStartsWithConsonant1 = main.startsWithConsonant("hello");
        expect(testStartsWithConsonant1).toBe("ellohay");
    });

    test('The string "tilt" in English becomes "ilttay" in Pig Latin', () => {
        let testStartsWithConsonant3 = main.startsWithConsonant("tilt");
        expect(testStartsWithConsonant3).toBe("ilttay");
    });

    test('The string "world" in English becomes "orldway" in Pig Latin', () => {
        let testStartsWithConsonant2 = main.startsWithConsonant("world");
        expect(testStartsWithConsonant2).toBe("orldway");
    });

    test('The string "slope" in English becomes "opeslay" in Pig Latin', () => {
        let testStartsWithConsonant3 = main.startsWithConsonant("slope");
        expect(testStartsWithConsonant3).toBe("opeslay");
    });

    test('The string "chrome" in English becomes "omechray" in Pig Latin', () => {
        let testStartsWithConsonant3 = main.startsWithConsonant("chrome");
        expect(testStartsWithConsonant3).toBe("omechray");
    });
});

// Extended Challenges
// Multiple words in a string that maintain their case ("a" vs "A")
describe('multiple words in a string function that maintain case', () => {
    test('The string "Hello World" in English becomes "elloHay orldWay" in Pig Latin', () => {
        let testStartsWithConsonant3 = main.pigLatin("Hello World");
        expect(testStartsWithConsonant3).toBe("elloHay orldWay");
    });
});


// Multiple words in a string where the result is always lowercase ("a" becomes "a")
describe('multiple words in a string function that is all lowercase', () => {
    test('The string "Hello World" in English becomes "ellohay orldway" in Pig Latin', () => {
        let testStartsWithConsonant3 = main.pigLatinLower("Hello World");
        expect(testStartsWithConsonant3).toBe("ellohay orldway");
    });
});