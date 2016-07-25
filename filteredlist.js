var fs=require("fs");

fs.readdir(process.argv[2], function(err, data){
   if (err) throw err;
   var ext="."+process.argv[3];
   var list=data.filter(function(f){
       return f.indexOf(ext)>0 && f.indexOf(ext)===f.length-ext.length; 
   });
    for (var i=0; i<list.length; i++) {
        console.log(list[i]);
    }
});
