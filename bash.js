var commands = require('./commands');


process.stdout.write('prompt > ');
process.stdin.on('data', function(data)
{
  var inputArray = data.toString().trim().split(" ");
  var cmd = inputArray[0]; // remove the newline
  var arguments = inputArray.slice(1);

  if(cmd === "pwd")
  {
     commands.pwd();
     process.stdout.write('\nprompt > ');
  }
  else if (cmd === "date")
  {
    commands.date();
    process.stdout.write('\nprompt > ');
  }
  else if(cmd === "ls")
  {
     commands.ls();
  }
  else if(cmd === "echo")
  {
    commands.echo(arguments);
    process.stdout.write('\nprompt > ');
  }
});