const Manager = require('../lib/manager')

// all tests check and determine if 'name,id,email,office#' are present
test('gets name', () => {
    const manager = new Manager('John', 2, 'JohnDoe@gmail.com', 4);

    expect(manager.getName()).toEqual(expect.any(String));
});

test('gets ID', () => {
    const manager = new Manager('John', 2, 'JohnDoe@gmail.com', 4);

    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets email', () => {
    const manager = new Manager('John', 2, 'JohnDoe@gmail.com', 4);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
});

test('gets office number', () => {
    const manager = new Manager('John', 2, 'JohnDoe@gmail.com', 4);

    expect(manager.getOffice()).toEqual(expect.any(Number))
})