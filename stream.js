const fs = require("fs");

const readStream = fs.createReadStream("data.txt", "utf8");
const writeStream = fs.createWriteStream("copy.txt");

readStream.on("data", (chunk) => {
  console.log("Pedazo de texto: ", chunk);
});
readStream.on("error", (err) => {
  appendError(err);
});
writeStream.on("error", (err) => {
  appendError(err);
});

function appendError(err = null) {
  if (err) {
    fs.appendFile("errors.txt", `\n${err}`, (appendErr) => {
      if (appendErr) {
        console.log(appendErr);
        return;
      }
    });
  }
}

readStream.pipe(writeStream);
