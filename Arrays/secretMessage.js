let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Task 1: remove last word
secretMessage.pop();
console.log(secretMessage);
// Task 2: check length
console.log(secretMessage.length);
// Task 3: add 'to' and 'Program' at end
secretMessage.push('to', 'Program');
console.log(secretMessage);
// Task 4: replace 'easily' with 'right'
secretMessage[7] = 'right';
console.log(secretMessage);
// Task 5: remove first word
secretMessage.shift();
console.log(secretMessage);
// Task 6: add 'Programming' to beginning of array
secretMessage.unshift('Programming');
console.log(secretMessage);
// Task 7: remove words from index 6 to 10 and replace with 'know'
secretMessage.splice(6,5, 'know')
console.log(secretMessage);
// Task 8: concatenate all words into a sentence
console.log(secretMessage.join(' '));