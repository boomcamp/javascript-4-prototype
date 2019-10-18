var isNode;

if (typeof window === 'undefined') {
    global.window = {node:true}
    isNode = global.window.node;
}else{
    var isNode = false;
}
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

describe('instanceArray', function() {
  describe('users', function() {
    it('should exist', function() {
      expect(users).toBeDefined();
    });
    it('should be an array', function() {
      expect(users).toEqual(jasmine.any(Array));
    });
    it('should have 4 items', function() {
      expect(users.length).toBe(4);
    });
    it('should contain all instances of User', function() {
      var areAllUsers = true;
      for (var i = 0; i < users.length; i++) {
        if (!users[i] instanceof User) {
          areAllUsers = false;
        }
      }
      expect(areAllUsers).toBe(true);
    });
  });
});
