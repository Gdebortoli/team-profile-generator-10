const Intern = require('../lib/Intern');

//TEST - Create Intern 
test('creates an intern object in the roster', () => {
    const intern = new Intern(''); 

    expect(typeof(intern)).toBe('object');
});
/*

name

id

email

getName()

getId()

getEmail()

getRole() // Returns 'Employee'

school

getSchool()

getRole() // Overridden to return 'Intern'

*/