const sentence = "hello there from lighthouse labs";

const printOneByOne = function(sentence) {
  let time = 0;
  for (let i = 0;  i < sentence.length; i++) {
    setTimeout(() => {
      if (i === sentence.length - 1) {
        process.stdout.write(`${sentence[i]}\n`);
      } else {
        process.stdout.write(sentence[i]);
      }
    }, time);
    time += 50; 
  }
}

printOneByOne(sentence);