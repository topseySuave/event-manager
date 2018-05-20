import multiparty from 'multiparty';
// import path from 'path'
import fs from 'fs';

export const saveImage = (req, res, next) => {
  let form = new multiparty.Form();

  form.parse(req, (err, fields, files) => {
    let { path: tempPath, originalFilename } = files.img_url[0];
    let copyToPath = `/public/image/uploads/${originalFilename}`;

    fs.readFile(tempPath, (err, data) => {
      // make copy of image to new location
      fs.writeFile(newPath, data, (err) => {
        // delete temp image
        fs.unlink(tmpPath, () => {
          // res.send("File uploaded to: " + newPath);
          next();
        });
      });
    });
  });
};
