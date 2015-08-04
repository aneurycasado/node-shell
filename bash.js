var commands = require('./commands');


process.stdout.write('prompt > ');
process.stdin.on('data', function(data)
{
  var inputArray = data.toString().trim().split(" ");
  var cmd = inputArray[0]; // remove the newline
  var args = inputArray.slice(1);
  if(cmd === "pwd")
  {
     commands.pwd();
     process.stdout.write('\nprompt > ');
  }
  else if(cmd === "date")
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
    commands.echo(args);
    process.stdout.write('\nprompt > ');
  }
  else if(cmd === "cat")
  {
    commands.cat(args[0]);
  }
  else if(cmd === "head")
  {
    commands.head(args[0]);
  }
  else if(cmd === "tail")
  {
    commands.tail(args[0]);
  }
  else if(cmd === "sort")
  {
    commands.sortFile(args[0]);
  }
  else if(cmd === "wc")
  {
    commands.wc(args[0]);
  }
  else if(cmd === "uniq")
  {
    commands.uniq(args[0]);
  }
});
