var http=require('http');
var url=process.argv[2];
http.get(url, function(response) {
    response.on("error", function(err) {return console.log(err);});
    response.on("data", function(data) {
        return console.log(data.toString());
    });
});
