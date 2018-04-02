'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.saveImage = undefined;

var _multiparty = require('multiparty');

var _multiparty2 = _interopRequireDefault(_multiparty);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var saveImage = exports.saveImage = function saveImage(req, res, next) {
    var form = new _multiparty2.default.Form();

    form.parse(req, function (err, fields, files) {
        var _files$img_url$ = files.img_url[0],
            tempPath = _files$img_url$.path,
            originalFilename = _files$img_url$.originalFilename;

        var copyToPath = '/public/image/uploads/' + originalFilename;

        _fs2.default.readFile(tempPath, function (err, data) {
            // make copy of image to new location
            _fs2.default.writeFile(newPath, data, function (err) {
                // delete temp image
                _fs2.default.unlink(tmpPath, function () {
                    // res.send("File uploaded to: " + newPath);
                    next();
                });
            });
        });
    });
};
// import path from 'path'
//# sourceMappingURL=imageUploader.js.map