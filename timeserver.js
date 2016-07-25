var tcp=require("net");
var server=tcp.createServer(function(socket){
    var date=new Date();
    var formatted=date.getFullYear().toString()+'-'+
                zeroPrefix(date.getMonth()+1)+'-'+
                zeroPrefix(date.getDate())+' '+
                zeroPrefix(date.getHours())+':'+
                zeroPrefix(date.getMinutes());

    formatted+="\n";
    socket.write("");
    socket.end(formatted);
});

function zeroPrefix(val) {
    if (val<10) { return "0"+val.toString() }
    else {return val.toString()}
}

server.listen(process.argv[2]);
