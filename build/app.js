'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _swaggerUiExpress = require('swagger-ui-express');

var _swaggerUiExpress2 = _interopRequireDefault(_swaggerUiExpress);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _swagger = require('./docs/swagger');

var _swagger2 = _interopRequireDefault(_swagger);

var _events = require('./routes/events');

var _events2 = _interopRequireDefault(_events);

var _centers = require('./routes/centers');

var _centers2 = _interopRequireDefault(_centers);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

var _administrator = require('./routes/administrator');

var _administrator2 = _interopRequireDefault(_administrator);

var _webpack3 = require('../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

// Set up the express app
var app = (0, _express2.default)();
var compiler = (0, _webpack2.default)(_webpack4.default);

// Init API Route string
var apiRoute = '/api/v1';

app.set('superSecret', process.env.SECRET_KEY); // secret variable

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(_bodyParser2.default.json({ limit: '10mb' }));
app.use(_bodyParser2.default.urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000 }));

// Log requests to the console.
app.use((0, _morgan2.default)('dev'));
app.use(apiRoute, _centers2.default);
app.use(apiRoute, _users2.default);
app.use(apiRoute, _events2.default);
app.use('/admin', _administrator2.default);
app.use('/docs', _swaggerUiExpress2.default.serve, _swaggerUiExpress2.default.setup(_swagger2.default));

app.use((0, _webpackHotMiddleware2.default)(compiler, {
  hot: true,
  publicPath: _webpack4.default.output.publicPath,
  noInfo: true,
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.use(_express2.default.static(_path2.default.join(__dirname, '../client/public')));
app.set('views', _path2.default.join(__dirname, '..', 'client', 'public'));

// Setup a default catch-all route that sends back the index html file.
app.get('*', function (req, res) {
  res.status(200).sendFile(_path2.default.join(__dirname, '..', 'client/public/index.html'));
});

app.use(function (req, res) {
  return res.status(404).send({
    error: '404: Sorry Page Not Found!'
  });
});

var port = parseInt(process.env.PORT, 10) || 8000;
app.set('port', port);

app.listen(port, function (err) {
  if (err) console.log(err);
  console.log('server listening on port ' + port);
});

exports.default = app;
//# sourceMappingURL=app.js.map