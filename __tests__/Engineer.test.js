const Engineer = require('../lib/Engineer'); 

// TEST - Create Engineer
test('creates engineer object in the roster', () => {
    const engineer = new Engineer('');
    
    expect(typeof(engineer)).toBe('object');
});
/*

name

id

email

getName()

getId()

getEmail()

getRole() // Returns 'Employee'

github // GitHub username

getGithub()

getRole() // Overridden to return 'Engineer'

*/