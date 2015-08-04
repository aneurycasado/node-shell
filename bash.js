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
  var cmd = inputArray[0]; // remove the newline
  var args = inputArray.slice(1);
  if(cmd === "pwd")
  {
     commands.pwd("", done);
  }
  else if(cmd === "date")
  {
    commands.date("", done);
  }
  else if(cmd === "ls")
  {
     commands.ls("", done);
  }
  else if(cmd === "echo")
  {
    commands.echo(args, done);
  }
  else if(cmd === "cat")
  {
    commands.cat(args[0], done);
  }
  else if(cmd === "head")
  {
    commands.head(args[0], done);
  }
  else if(cmd === "tail")
  {
    commands.tail(args[0], done);
  }
  else if(cmd === "sort")
  {
    commands.sortFile(args[0], done);
  }
  else if(cmd === "wc")
  {
    commands.wc(args[0], done);
  }
  else if(cmd === "uniq")
  {
    commands.uniq(args[0], done);
  }
  else if(cmd === "curl")
  {
    commands.curl(args[0], done);
  }
});
