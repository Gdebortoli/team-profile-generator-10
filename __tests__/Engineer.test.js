const Engineer = require('../lib/Engineer'); 

// TEST - Create Engineer
test('creates engineer object in the roster', () => {
    const engineer = new Engineer('');
    
    expect(typeof(engineer)).toBe('object');
});
