const sentence = "hello there from lighthouse labs";

for (let index = 0; index < sentence.length; index++) {
  const char = sentence[index];
  setTimeout(() => {
    process.stdout.write(char);
      // print the char here
    }, index * 50)
  
} 
// for (const char of sentence) {

// }

