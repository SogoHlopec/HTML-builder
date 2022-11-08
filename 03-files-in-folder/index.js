const fs = require("fs");
const path = require("path");

fs.promises.readdir(path.join(__dirname, "./secret-folder"), { withFileTypes: true }).then((files) => {
  for (const file of files) {
    if (file.isFile()) {
      const name = file.name;
      const filePath = path.join(__dirname, "./secret-folder", name);
      const extension = path.extname(name).slice(1);
      fs.stat(filePath, (err, stats) => {
        console.log(stats.size);
        console.log(`${name} - ${extension} - ${(stats.size/1024).toFixed(3)}kb`);
      });
    }
  }
})



