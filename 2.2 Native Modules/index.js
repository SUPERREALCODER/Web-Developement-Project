const fs = require("fs");
/*fs.writeFile("message1.txt","hello brother", (err) => {
  if (err) throw err;
    console.log("the file has been saved");
});*/

fs.readFile("message.txt3","utf8" ,(err, data) => {
  if (err) throw err;
  console.log(data);
}); 




