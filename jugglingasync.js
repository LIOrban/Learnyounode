var http=require("http");
var results=[];
var completed=0;

function getdata(i) {
http.get(process.argv[i], function(response){
    var str="";
    response.setEncoding('utf8');
    response.on("error", function(err) {return console.log(err);});
    response.on("data", function(data){str+=data;});
    response.on("end", function(data) {
        completed++;
        results[i-2]=str;
        if (completed===3) {logResults();}
    });
});
}

function logResults() {
    for (var i=0; i<3; i++) {
        console.log(results[i]);
    }
}

for (var i=2; i<5; i++) {
    getdata(i);
}
