var fs = require('fs');
var request = require('request');

module.exports.pwd = function(arg, doneFunc)
{
  doneFunc(__dirname);
};

var date = new Date();
module.exports.date = function(arg, doneFunc)
{
  doneFunc(date);
};

module.exports.ls = function(arg, doneFunc)
{
    fs.readdir('.', function(err, files)
    {
      if (err) throw err;
      doneFunc(files.join("\n"));
    });
};

module.exports.echo = function(args, doneFunc)
{
  doneFunc(args.join(" "));
};

module.exports.cat = function(fileName, doneFunc)
{
  fs.readFile("./"+fileName, 'utf8', function(err,data)
  {
    if(err)
    {
      throw err;
    }
    else
    {
      doneFunc(data);
    }
  });
};

module.exports.head = function(fileName, doneFunc)
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
      doneFunc(outData.join("\n"));
    }
  });
};

module.exports.tail = function(fileName, doneFunc)
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
      doneFunc(outData.join("\n"));
    }
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
      var unTrimmed = data.split("\n");
      var trimmed = unTrimmed.map(function(element){
        return element.trim();
      });
      var sorted = trimmed.sort();
      doneFunc(sorted.join("\n"));
    }
  });
};

module.exports.wc = function(fileName, doneFunc)
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
      doneFunc(lines.length);
    }
  });
};

module.exports.uniq = function(fileName, doneFunc)
{
  var output;

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

      output = lines.filter(function(element, index, arr)
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

      doneFunc(output);
    }
  });
};

module.exports.curl = function(url, doneFunc)
{
  request(url, function (err, response, body) {
    if (!err && response.statusCode == 200) {
      doneFunc(body); // Show the HTML for the Google homepage.
    }
    else
    {
      throw err;
    }
  });
}

