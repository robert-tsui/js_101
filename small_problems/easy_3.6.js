// Madlibs is a simple game where you create a story template with "blanks" for words.
// You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.
// Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.

/*
Understanding the [P]roblem
===========================
Input: string 

Output: string

Rules:
- user is prompted for input string argument
- sentences are constructed with 4 missing arguments 
- each argument can be used more than once

[E]xamples and Test Cases
=========================
1. Validate or invalidate what we wrote for input/output/rules
2. Look for implicit requirements

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

-- Intermission --
- Do I have a mental model?
- Mental model: WHAT you have to do in order to get from input to output

- program uses `readline-sync` for command line prompts. 
- each prompt is saved to a variable
- each variable is used in the storyline

[D]ata Structure
================
- Do I need an array or an object for my solution? no

[A]lgorithm
===========
- written in plain english
- language agnostic - not naming specific methods and syntax
- HOW you're going to get from input to output

// require `readline-sync` module
// prompt user and save to a variable `noun`
// prompt user and save to a variable `verb`
// prompt user and save to a variable `adjective`
// prompt user and save to a variable `adverb`

// output the storyline with template literals
*/

function madlib(arg1, arg2, arg3, arg4) {
  let readline = require(`readline-sync`);

  let noun = readline.question('Enter a noun: ');
  let verb = readline.question('Enter a verb: ');
  let adjective = readline.question('Enter an adjective: ');
  let adverb = readline.question('Enter an adverb: ');

  console.log(
    `Do you ${verb} your blue ${noun} quickly? That's hilarious! The ${adjective} dog walks ${adverb} over the lazy ${noun}. The ${noun} ${adverb} walks up ${adjective} Joe's turtle.`
  );
}

console.log(madlib());
