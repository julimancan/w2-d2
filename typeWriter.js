const sentence = "hello there from lighthouse labs";
const timeBetweenLetters = 50;


const print = (sentence) => {
  for (const charIndex in sentence) {
    let char = sentence[charIndex]
    let startTime = 0;
    // console.log(char)
    setTimeout(() => {
      process.stdout.write(char);
    }, startTime + (timeBetweenLetters * charIndex));
    // console.log(char)
  }
  setTimeout(() => {
    console.log("\n")
  }, 1500)
}

print(sentence)



// setTimeout(() => {

// }, 1000)



// print(sentence)