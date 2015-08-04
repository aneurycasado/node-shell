var fs = require('fs');

module.exports.pwd = function(){
  console.log(__dirname);
};

var date = new Date();
module.exports.date = function(){
  console.log(date);
};

module.exports.ls = function(){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write('\nprompt > ');
    });
};
