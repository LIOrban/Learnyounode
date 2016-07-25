var fs=require("fs");
module.exports=function(dir,ext, callback) {
    fs.readdir(dir, function(err, data){
        if (err) {return callback(err);}
        var ex="."+ext;
        var list=data.filter(function(f){
            return f.indexOf(ex)>0 && f.indexOf(ex)===f.length-ex.length; 
        });
    return callback(null,list);
    });
};
