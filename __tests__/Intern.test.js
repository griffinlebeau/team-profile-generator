const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('Dave', 'id', '@gmail', 'SLU');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
})

test("gets intern's school", () => {
    const intern = new Intern('Dave', 'id', '@gmail', 'SLU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});