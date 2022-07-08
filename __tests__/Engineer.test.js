const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer;
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
})

test("gets engineer's name", () => {
    const engineer = new Engineer;
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
});

test("gets engineer's id number", () => {
    const engineer = new Engineer;
    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("gets engineer's email", () => {
    const engineer = new Engineer;
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test("gets engineer's role", () => {
    const engineer = new Engineer;
    expect(engineer.getRole()).toEqual(expect.stringContaining(engineer.role.toString()));
});

test("gets engineer's github", () => {
    const engineer = new Engineer;
    expect(engineer.getGithub().toEqual(expect.stringContaining(engineer.github.toString())));
});