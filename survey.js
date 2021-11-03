const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const obj = {};
const survey = function() {
  //console.log(callback(obj));
  rl.question("What's your name? ", (answer) => {
    obj["name"] = answer;
    rl.question("What's an activity you like doing?" , (answer) => {
      obj["activity"] = answer;
      rl.question("What do you listen to while doing that?" , (answer) => {
        obj["listenActivity"] = answer;
        rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)" , (answer) => {
          obj["meal"] = answer;
          rl.question("What's your favourite thing to eat for that meal?" , (answer) => {
            obj["food"] = answer;
            rl.question("Which sport is your absolute favourite?" , (answer) => {
              obj["favourite"] = answer;
              rl.question("What is your superpower? In a few words, tell us what you are amazing at!" , (answer) => {
                obj["superPower"] = answer;
                console.log(obj["name"] + "loves listening to " + obj["listenActivity"] + " while " + obj["activity"]  + " , devouring " + obj["food"] + " for " + obj["meal"] + 
                " prefers " +  obj["favourite"] +" over any other sport, and is amazing at " + obj["superPower"]);
                  rl.close();                  
              })    
            })
          })
        })
      })
    })
  });
}
survey();