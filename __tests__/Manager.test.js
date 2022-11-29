const Manager = require('../lib/Manager'); 

// TEST- Create Manager
test('creates a manager object in the roster', () => {
    const manager = new Manager('');

    expect(typeof(manager)).toBe('object');
})
