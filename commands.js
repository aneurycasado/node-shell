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

module.exports.echo = function(args)
{
  console.log(args.join(" "));
};

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
};

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
};

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
};

module.exports.sortFile = function(fileName)
{
  fs.readFile("./"+fileName, 'utf8', function(err,data)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      var unTrimmed = data.split("\n");
      var trimmed = unTrimmed.map(function(element){
        return element.trim();
      });
      var sorted = trimmed.sort();
      sorted.forEach(function(line)
      {
        console.log(line);
      });
    }
  });
};

module.exports.wc = function(fileName)
{
  fs.readFile("./"+fileName, 'utf8', function(err,data)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      var lines = data.split("\n");
      console.log(lines.length);
    }
  });
};

module.exports.uniq = function(fileName)
{
  fs.readFile("./"+fileName, 'utf8', function(err,data)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      var lines = data.split("\n");
      console.log(lines.length);
      lines.forEach(function(element,index,array)
      {
          if(index + 1 < array.length)
          {
            if(!(element === array[index+1]))
            {
              console.log(element);
            }
          }
          var nextLine = array[index+1];
      });
    }
  });
};
