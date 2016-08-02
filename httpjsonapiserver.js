var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true);
  var pathname = urlObj.pathname;
  var iso = urlObj.query.iso;
  var response;
  
  if (pathname === '/api/parsetime') {
      response = getTimeObject(iso);
    }
  else if (pathname === '/api/unixtime') {
     response = getUnixTimeObject(iso);
  }
 
  if (response) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
  }
  else {
    res.writeHead(404);
    res.end();
  }
}).listen(process.argv[2]);

function getTimeObject(str) {
  var date = new Date(Date.parse(str));
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function getUnixTimeObject(str) {
  return {
    unixtime: Date.parse(str)
  };  
}
