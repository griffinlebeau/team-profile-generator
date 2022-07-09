const Engineer = require('../lib/Engineer')

test('creates an engineer object', () => {
    const engineer = new Engineer('Dave', '1', '@gmail', 'github');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
})

test("gets engineer's github", () => {
    const engineer = new Engineer('Dave', '1', '@gmail', 'github');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});