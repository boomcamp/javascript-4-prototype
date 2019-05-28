/*const isNode = new Function(`
  try {
    return this === global;
  } catch (e) {
    return false;
  }
`);*/

if (isNode()) {
  // test if file is running in a node process
  const fs = require('fs');
  const path = require('path');

  const filePath = path.resolve(__dirname, '../../'); // this should be the root dir
  fs.readdirSync(filePath) // eval all of the js files faking how a browser would execute
    .filter(path => {
      if (path) {
        return /\.js$/.test(path);
      } else {
        return false;
      }
    })
    .forEach(file => {
      global.eval(fs.readFileSync(`${filePath}/${file}`) + '');
    });
}

// Test
describe('arrayProperty', function() {
  describe('String', function() {
    it('should have a reverse method', function() {
      var str = 'Hello';
      expect(str.reverse).toBeDefined();
      expect(str.reverse).toEqual(jasmine.any(Function));
    });
    describe('reverse method', function() {
      it('should reverse the string', function() {
        var str = 'Hello';
        expect(str.reverse()).toEqual('olleH');
      });
    });
  });
});
