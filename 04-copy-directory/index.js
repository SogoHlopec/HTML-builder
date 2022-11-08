const fs = require("fs");
const path = require("path");

async function copyDir() {
  try {
    const filesCopy = await fs.promises.readdir(path.join(__dirname, "./files-copy"));
    for (const file of filesCopy) {
      fs.unlink(path.join(__dirname, "./files-copy", file), err => {
        if (err) return console.error(err)
      })
    }
    await fs.promises.mkdir(path.join(__dirname, "./files-copy"), { recursive: true });
    const files = await fs.promises.readdir(path.join(__dirname, "files"));
    console.log(files);
    for (const file of files) {
      const fileFrom = path.join(__dirname, "files", file);
      const fileIn = path.join(__dirname, "files-copy", file);
      await fs.promises.copyFile(fileFrom, fileIn);
    }
  }
  catch (err) {
    console.log(`Error: ${err.message}`);
  }
}
copyDir();