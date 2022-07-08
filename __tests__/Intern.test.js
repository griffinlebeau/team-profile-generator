const Intern = require('../lib/Intern')

test('creates an intern object', () => {
    const intern = new Intern('me');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
})

test("gets intern's name", () => {
    const intern = new Intern;
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
});

test("gets intern's id number", () => {
    const intern = new Intern;
    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("gets intern's email", () => {
    const intern = new Intern;
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test("gets intern's role", () => {
    const intern = new Intern;
    expect(intern.getRole()).toBe('Intern');
});

test("gets intern's school", () => {
    const intern = new Intern;
    expect(intern.getSchool().toEqual(expect.stringContaining(intern.school.toString())));
});