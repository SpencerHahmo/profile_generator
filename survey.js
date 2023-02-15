const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Asks a question and stores the answer to it into q1answer
rl.question("What's your name/ nickname? ", (q1answer) => {
  
  //Asks a question and stores the answer to it into q2answer
  rl.question("What's an activity you like doing? ", (q2answer) => {
    
    //Asks a question and stores the answer to it into q3answer
    rl.question('What music do you like to listen to? ', (q3answer) => {
      
      //Asks a question and stores the answer to it into q4answer
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (q4answer) => {
        
        //Asks a question and stores the answer to it into q5answer
        rl.question("What's your favourite thing to eat for that meal? ", (q5answer) => {
          
          //Asks a question and stores the answer to it into q6answer
          rl.question('Which sport is your absolute favourite? ', (q6answer) => {
            
            //Asks a question and stores the answer to it into q7answer
            rl.question("What is your superpower? In other words, what's something you're amazing at? ", (q7answer) => {
              
              //Once the user answers all of the questions it will output a spinner that lasts 2 seconds
              console.log();
              let timer = 200;
              while (timer < 2000) {
                setTimeout(() => {
                  process.stdout.write('\r|   Generating profile ...');
                }, timer += 200);

                setTimeout(() => {
                  process.stdout.write('\r/   Generating profile ...');
                }, timer += 200);
                
                setTimeout(() => {
                  process.stdout.write('\r-   Generating profile ...');
                }, timer += 200);
                
                setTimeout(() => {
                  process.stdout.write('\r\\   Generating profile ...');
                }, timer += 200);
              }
              
              //After the generating profile ... spinner is done it will output a fully formed paragraph for their online profile
              setTimeout(() => {
                process.stdout.write('\r\\   The profile has been generated');
                console.log(`\n\nAn activity ${q1answer} likes to do is ${q2answer}.  They also like to listen to ${q3answer}.` +
                `  Their favorite meal is ${q4answer} where they enjoy eating ${q5answer} the most.  Out of all the sports in the world, their favorite is ${q6answer}.` +
                `  Something that they are amazing at is ${q7answer}.`);
              }, timer);
              rl.close();
            });
          });
        });
      });
    });
  });
});