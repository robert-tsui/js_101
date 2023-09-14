let ladder = ''[('head', 'heal', 'teal', 'tell', 'tall', 'tail')].forEach(
  (word) => {
    if (ladder !== '') {
      ladder += '-';
    }

    ladder += word;
  }
);

console.log(ladder); // expect: head-heal-teal-tell-tall-tail

// Due to non-explicit semicolon at the end of line 1, JS employs Automatic Semicolon Insertion on line 1 and reads line 3 as an accessor on the empty string instead of an array. Thus, the expression `''['head']` evaluates to `undefined` because a string character cannot be accessed with a property that isn't an index and an empty string cannot be accessed with any value at all.
