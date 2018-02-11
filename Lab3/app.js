/**
 * Created by xiewangzhi on 09/02/2018.
 */
const fileData = require("./fileData");
const textMetrics = require("./textMetrics");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));
async function main() {
  const path1 = 'chapter1.result.json';
  const path2 = 'chapter2.result.json';
  const path3 = 'chapter3.result.json';
  fs.open(path1, 'r', async (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT'){
        const getString = await fileData.getFileAsString("chapter1.txt");
        let text = textMetrics.simplify(getString);
        await fileData.saveStringToFile("chapter1.debug.txt", text);
        let obj = textMetrics.createMetrics(text);
        await fileData.saveJSONToFile(path1, obj);
        console.log(obj);
        return;
      }
      throw err;
    } else {
      console.log(await fileData.getFileAsJSON(path1))
    }

  });

  fs.open(path2, 'r',async (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        let text = textMetrics.simplify(await fileData.getFileAsString("chapter2.txt"));
        await fileData.saveStringToFile("chapter2.debug.txt", text);
        let obj = textMetrics.createMetrics(text);
        await fileData.saveJSONToFile(path2, obj);
        console.log(obj);
        return;
      }
      throw err;
    } else {
      console.log(await fileData.getFileAsJSON(path2))
    }

  });

  fs.open(path3, 'r', async (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        let text = textMetrics.simplify(await fileData.getFileAsString("chapter3.txt"));
        await fileData.saveStringToFile("chapter3.debug.txt", text);
        let obj = textMetrics.createMetrics(text);
        await fileData.saveJSONToFile(path3, obj);
        console.log(obj);
        return;
      }
      throw err;
    } else {
      console.log(await fileData.getFileAsJSON(path3))
    }
  });
}

main();