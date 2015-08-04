var fs = require('fs');

module.exports.pwd = function(arg)
{
  console.log(__dirname);
};

var date = new Date();
module.exports.date = function(arg)
{
  console.log(date);
};

module.exports.ls = function(arg)
{
    fs.readdir('.', function(err, files) 
    {
      if (err) throw err;
      files.forEach(function(file) 
      {
        process.stdout.write(file.toString() + "\n");
      });
      process.stdout.write('\nprompt > ');
    });
};

module.exports.echo = function(arguments)
{
  console.log(arguments.join(" "));
}

module.exports.cat = function(fileName)
{
  fs.readFile("./"+fileName, 'utf8', function(err,data)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      console.log(data);
    }
    process.stdout.write('\nprompt > ');
  });
}

module.exports.head = function(fileName)
{
  var outData;
  fs.readFile("./"+fileName, 'utf8', function(err,data)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      outData = data.split("\n").slice(0,5);
      outData.forEach(function(element)
      {
        console.log(element);
      });
    }
    process.stdout.write('\nprompt > ');
  });
}

module.exports.tail = function(fileName)
{
  var outData;
  fs.readFile("./"+fileName, 'utf8', function(err,data)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      var dataInLines = data.split("\n");
      outData = dataInLines.slice(dataInLines.length-6,dataInLines.length);
      outData.forEach(function(element)
      {
        console.log(element);
      });
    }
    process.stdout.write('\nprompt > ');
  });
}
