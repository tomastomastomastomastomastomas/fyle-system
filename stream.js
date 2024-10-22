const fs = require("fs");

const readStream = fs.createReadStream("data.txt", "utf8");
const writeStream = fs.createWriteStream("copy.txt");

readStream.on("data", (chunk) => {
  console.log("Pedazo de texto: ", chunk);
});
readStream.on("error", (err) => {
  console.log(err);
});
writeStream.on("error", (err) => {
  console.log(err);
});

readStream.pipe(writeStream);
