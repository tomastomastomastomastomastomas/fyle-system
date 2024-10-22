const fs = require("fs");

// Sincronico ----------------------------------------------------------------------------------------------------
// try {
//   console.log(fs.readFileSync("data.txt", "utf8"));
// } catch (err) {
//   console.log("hubo un error al leer el archivo : ", err);
//   try {
//     fs.writeFileSync("data.txt", "hola");
//   } catch (err) {
//     console.log("hubo un erro al crear el archivo: ", err);
//   }
// }

// try {
//   fs.appendFileSync("data.txt", "\n hola diferente al primer hola");
// } catch (err) {
//   console.log("hubo un error al modificar el archivo : ", err);
// }

// try {
//   console.log(fs.readFileSync("data.txt", "utf8"));
// } catch (err) {
//   console.log("hubo un error al leer el archivo : ", err);
// }

// try {
//   fs.unlinkSync("data.txt");
// } catch (err) {
//   console.log("hubo un error al eliminar el archivo : ", err);
// }

// try {
//   fs.readFileSync("realData.txt", "utf-8");
// } catch (err) {
//   fs.appendFileSync("log.txt", `\n${err}`);
// }

// Asincronico ----------------------------------------------------------------------------------------------------

fs.readFile("data.txt", "utf-8", (err, data) => {
  if (err) {
    fs.writeFile("data.txt", "hola", (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  }
  console.log(data);
  fs.appendFile("data.txt", "\n hola diferente al primer hola", (err) => {
    if (err) {
      console.log(err);
      return;
    }
    fs.readFile("data.txt", "utf-8", (err, data) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(data);
      fs.unlink("data.txt", (err) => {
        if (err) {
          console.log(err);
          return;
        }
        fs.readFile("realData.txt", "utf-8", (err) => {
          if (err) {
            console.log(err);
            fs.appendFileSync("log.txt", `\n${err}`);
          }
        });
      });
    });
  });
});
