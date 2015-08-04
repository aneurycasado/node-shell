var fs = require('fs');

module.exports.pwd = function(arg){
  console.log(__dirname);
};

var date = new Date();
module.exports.date = function(arg){
  console.log(date);
};

module.exports.ls = function(arg){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write('\nprompt > ');
    });
};

module.exports.echo = function(arguments){
  console.log(arguments.join(" "));
}
