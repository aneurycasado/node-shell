var commands = require('./commands');


process.stdout.write('prompt > ');
process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd === "pwd"){
     commands.pwd();
     process.stdout.write('\nprompt > ');
  }
  else if (cmd === "date"){
    commands.date();
    process.stdout.write('\nprompt > ');
  }
  else if(cmd === "ls"){
     commands.ls();
  }else if(cmd === "echo"){
    console.log(data);
  }
});
