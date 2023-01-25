const Intern = require('../lib/intern')

test('gets name', () => {
    const intern = new Intern('John', 2, 'JohnDoe@gmail.com', 'UW');

    expect(intern.getName()).toEqual(expect.any(String));
});

test('gets ID', () => {
    const intern = new Intern('John', 2, 'JohnDoe@gmail.com', 'UW');

    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets email', () => {
    const intern = new Intern('John', 2, 'JohnDoe@gmail.com', 'UW');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
});

test('gets school', () => {
    const intern = new Intern('John', 2, 'JohnDoe@gmail.com', 'UW');

    expect(intern.getName()).toEqual(expect.any(String));
});