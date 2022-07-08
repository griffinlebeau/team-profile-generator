const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager;
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(Number));
    expect(manager.role).toBe('Manager');
})

test("gets manager's name", () => {
    const manager = new Manager;
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
});

test("gets manager's id number", () => {
    const manager = new Manager;
    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("gets manager's email", () => {
    const manager = new Manager;
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test("gets manager's role", () => {
    const manager = new Manager;
    expect(manager.getRole()).toBe('Manager');
});
