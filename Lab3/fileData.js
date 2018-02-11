/**
 * Created by xiewangzhi on 05/02/2018.
 */
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

module.exports = {

  async getFileAsString(path) {
    if (!path) throw "You must provide a path";
    let p = await fs.readFileAsync(path, {encoding: 'utf8'});
    return p
  },

  async getFileAsJSON(path) {
    if (!path) throw "You must provide a path";
    let buf = await fs.readFileAsync(path, (err, data) => {
      if (err){
        throw err;
      }

    });
    return JSON.parse(buf.toString());
  },

  async saveStringToFile(path, text) {
    if (!path || !text) throw "You must provide a path or text";
    return await fs.writeFileAsync(path, text);
  },

  async saveJSONToFile(path, obj) {
    if (!path || !obj) throw "You must provide a path or object";
    let json = JSON.stringify(obj);
    return await fs.writeFileAsync(path, json);
  }

};