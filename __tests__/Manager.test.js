const Manager = require('../lib/Manager')

test('creates an manager object', () => {
    const manager = new Manager('Dave', '1','@gmail', '300');
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.office).toEqual(expect.any(String));
    expect(manager.role).toBe('Manager');
})

test("gets manager's role", () => {
    const manager = new Manager('Dave', '1','@gmail', '300');
    expect(manager.getRole()).toBe('Manager');
});
