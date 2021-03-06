import 'raf/polyfill';
import jsdom from 'jsdom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const { JSDOM } = jsdom;

const virtualConsole = new jsdom.VirtualConsole();

virtualConsole.sendTo(console);

const { window } = new JSDOM('', { virtualConsole });

window.history.back = () => {};

let { document } = window;

// mock localStorage function
const localStorage = () => {
  const store = {};
  return {
    getItem: key => store[key] || null,
    setItem: (key, value) => {
      store[key] = value.toString();
    },
    removeItem: key => delete store[key],
  };
};

// Init Materializecss toast function
const Materialize = () => {
  const params = {};
  return {
    toast: (a, b, c, d) => {}
  };
};

const jQueryMock = {
  modal(action) {
    return action;
  },
  tooltip(action) {
    return action;
  },
  on(event, cb) {
    return cb(event);
  },
  css(props) {
    return props;
  },
  toDateString() {
    return jest.fn();
  },
  parallax() {},
  addClass() {},
  scroll(cb) {
    return cb();
  },
  offset() {
    let top = () => {};
    return top;
  },
  scrollTop() {},
  top: {}
};

const $ = () => jQueryMock;

// init jquery global object
global.$ = $;

// init scrollTo function
global.scrollTo = () => {};
global.localStorage = localStorage();
global.window = window;
global.document = document;
global.Materialize = Materialize;
global.Materialize.toast = () => {};
global.location = {
  href: '',
  reload() {}
};
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
