var fs = require('fs');
var request = require('request');

module.exports.pwd = function(argsString, doneFunc)
{
  doneFunc(__dirname);
};

var date = new Date();
module.exports.date = function(argsString, doneFunc)
{
  doneFunc(date);
};

module.exports.ls = function(argsString, doneFunc)
{
    var directory = argsString.split(" ")[0] || '.';
    fs.readdir(directory, function(err, files)
    {
      if (err) throw err;
      doneFunc(files.join("\n"));
    });
};

module.exports.echo = function(argsString, doneFunc)
{
  doneFunc(argsString);
};

module.exports.cat = function(argsString, doneFunc)
{
  var argsArray = argsString.split(" ");
  var numFiles = argsArray.length;
  var counter = 0;
  var output = '';
  argsArray.forEach(function(fileName)
  {
    fs.readFile("./"+fileName, 'utf8', function(err,data)
    {
      if(err)
      {
        throw err;
      }
      else
      {
        counter++;
        output+= data;
        if(counter===numFiles)
        {
          doneFunc(output);
        }
      }
    });

  });
};

module.exports.head = function(argsString, doneFunc)
{
  var argsArray = argsString.split(" ");
  var numFiles = argsArray.length;
  var counter = 0;
  var outputInArray = [];
  argsArray.forEach(function(fileName)
  {
    fs.readFile("./"+fileName, 'utf8', function(err,data)
    {
      if(err)
      {
        throw err;
      }
      else
      {
        counter++;
        outputInArray.push(data.split("\n").slice(0,5).join("\n"));
        if(counter===numFiles)
        {
          doneFunc(outputInArray.join("\n"));
        }
      }
    });

  });
};

module.exports.tail = function(argsString, doneFunc)
{
  var argsArray = argsString.split(" ");
  var numFiles = argsArray.length;
  var counter = 0;
  var outputInArray = [];
  argsArray.forEach(function(fileName)
  {
    fs.readFile("./"+fileName, 'utf8', function(err,data)
    {
      if(err)
      {
        throw err;
      }
      else
      {
        counter++;
        outputInArray.push(data.split("\n").slice(-5).join("\n"));
        if(counter===numFiles)
        {
          doneFunc(outputInArray.join("\n"));
        }
      }
    });

  });
};

module.exports.sortFile = function(fileName, doneFunc)
{
  fs.readFile("./"+fileName, 'utf8', function(err,data)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      var untrimmed = data.split("\n");
      var trimmed = untrimmed.map(function(element){
        return element.trim();
      });
      var sorted = trimmed.sort();
      doneFunc(sorted.join("\n"));
    }
  });
};

module.exports.wc = function(argsString, doneFunc)
{
  var argsArray = argsString.split(" ");
  var numFiles = argsArray.length;
  var numLines = 0;
  var counter = 0;
  argsArray.forEach(function(fileName)
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
        numLines += lines.length;
        counter++;
        if(counter===argsArray.length)
        {
          doneFunc(numLines);
        }
      }
    });
  });
};

module.exports.uniq = function(argsString, doneFunc)
{
  var output;
  argsArray = argsString.split(" ");
  counter = 0;
  argsArray.forEach(function(fileName)
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
        counter++;

        output += lines.filter(function(element, index, arr)
        {
          if(index>0 && element !== arr[index-1])
          {
            return true;
          }
          else
          {
            return false;
          }
        }).join("\n");
        if(counter=== argsArray.length)
        {
          doneFunc(output);
        }
      }
    });
  })
};

module.exports.curl = function(argsString, doneFunc)
{
  var urlArray = argsString.split(" ");
  var numUrls = urlArray.length;
  var counter = 0;
  var totalBody = "";
  urlArray.forEach(function(url)
  {
    request(url, function (err, response, body)
    {
      if (!err && response.statusCode == 200)
      {
        totalBody += body;
        counter++;
        if(counter===numUrls)
        {
          doneFunc(totalBody);
        }
      }
      else
      {
        throw err;
      }
    });
  });
}
