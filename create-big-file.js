const fs = require("fs");
const writeStream = fs.createWriteStream("data.txt");
for (let i = 0; i < 1000000; i++) {
  writeStream.write("hola ");
}
writeStream.end();
