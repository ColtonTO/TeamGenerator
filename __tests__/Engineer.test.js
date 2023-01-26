const Engineer = require('../lib/engineer')

// all tests check and determine if 'name,id,email,github' are present
test('gets name', () => {
    const engineer = new Engineer('John', 1, 'JohnDoe@gmail.com', 'githubusername01')

    expect(engineer.getName()).toEqual(expect.any(String))
});

test('gets ID', () => {
    const engineer = new Engineer('John', 3, 'JohnDoe@gmail.com', 'githubusername01');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets email', () => {
    const engineer = new Engineer('John', 4, 'JohnDoe@gmail.com', 'githubusername01');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
});

test('gets GitHub', () => {
    const engineer = new Engineer('John', 4, 'JohnDoe@gmail.com', 'githubusername01');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

