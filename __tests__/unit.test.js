// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// phone numbers
test('(858)319-8888 is a valid phone number', () => {
    expect(functions.isPhoneNumber('858-319-8888')).toBe(true);
});
test('858-319-8888 is a valid phone number', () => {
    expect(functions.isPhoneNumber('858-319-8888')).toBe(true);
});
test('1234567980 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('1234567980')).toBe(false);
});
test('123-4-567980 is not a valid phone number', () => {
    expect(functions.isPhoneNumber('123-4-567980')).toBe(false);
});

// emails
test('rhuang@gmail.com is a valid email', () => {
    expect(functions.isEmail('rhuang@gmail.com')).toBe(true);
});
test('rhuang@qq.cn is a valid email', () => {
    expect(functions.isEmail('rhuang@qq.cn')).toBe(true);
});
test('rhuang@qq.cnnn is not a valid email', () => {
    expect(functions.isEmail('rhuang@qq.cnnn')).toBe(false);
});
test('http.com is not a valid email', () => {
    expect(functions.isEmail('http.com')).toBe(false);
});

// password
test('asgdasgds is a valid strong password', () => {
    expect(functions.isStrongPassword('asgdasgds')).toBe(true);
});
test('ASDFdsba is a valid strong password', () => {
    expect(functions.isStrongPassword('ASDFdsba')).toBe(true);
});
test('!@#$%^&*( is not a valid strong password', () => {
    expect(functions.isStrongPassword('!@#$%^&*(')).toBe(false);
});
test('165132 is not a valid strong password', () => {
    expect(functions.isStrongPassword('165132')).toBe(false);
});

// date
test('09/28/2000 is a valid date', () => {
    expect(functions.isDate('09/28/2000')).toBe(true);
});
test('9/28/2000 is a valid date', () => {
    expect(functions.isDate('9/28/2000')).toBe(true);
});
test('09/28/20 is not a valid date', () => {
    expect(functions.isDate('09/28/20')).toBe(false);
});
test('009/28/2000 is not a valid date', () => {
    expect(functions.isDate('009/28/2000')).toBe(false);
});

// hex
test('aaa111 is a valid hex color', () => {
    expect(functions.isHexColor('aaa111')).toBe(true);
});
test('111 is a valid hex color', () => {
    expect(functions.isHexColor('111')).toBe(true);
});
test('aa111 is not a valid hex color', () => {
    expect(functions.isHexColor('aa111')).toBe(false);
});
test('xxx111 is not a valid hex color', () => {
    expect(functions.isHexColor('xxx111')).toBe(false);
});