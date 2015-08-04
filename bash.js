var commands = require('./commands');
process.stdout.write('prompt > ');

var done = function(output)
{
  console.log(output);
  process.stdout.write('\nprompt > ');
}

process.stdin.on('data', function(data)
{

  var inputArray = data.toString().trim().split(" ");
  var cmd = inputArray[0];
  var argsString = inputArray.slice(1).join(" ");
  /*
  var inputArray = data.toString().trim().split("|");
  var inputBetweenPipes = inputArray.map(function(element)
  {
    return element.trim();
  });

  var firstThing = inputBetweenPipes[0].split(" ");
  var cmd = firstThing[0];
  var args = firstThing.slice(1);

  console.log(inputArray);*/
  if(commands[cmd])
  {
    commands[cmd](argsString, done);
  }
});
