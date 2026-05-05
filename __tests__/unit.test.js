// unit.test.js

//this imports the functions from unit-test-me so i dont have to
import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhonenumber
test('isPhoneNumber expect true test 1', () => {
  expect(isPhoneNumber('999-999-9999')).toBe(true);
});
test('isPhoneNumber expect true test 2', () => {
  expect(isPhoneNumber('900-299-4322')).toBe(true);
});
test('isPhoneNumber expect false test 1', () => {
  expect(isPhoneNumber('this aint a phone number')).toBe(false);
});
test('isPhoneNumber expect false test 2', () => {
  expect(isPhoneNumber('not-thi-stoo')).toBe(false);
});

//isEmail
test('isEmail expect true test 1', () => {
  expect(isEmail('kac019@ucsd.edu')).toBe(true);
});
test('isEmail expect true test 2', () => {
  expect(isEmail('lebronjames@gmail.com')).toBe(true);
});
test('isEmail expect false test 1', () => {
  expect(isEmail('thisisnotanemail1234')).toBe(false);
});
test('isEmail expect false test 2', () => {
  expect(isEmail('thi@.weiofjiowejf')).toBe(false);
});

//isStrongPassword
test('isStrongPassword expect true test 1', () => {
  expect(isStrongPassword('randomBull2__2')).toBe(true);
});
test('isStrongPassword expect true test 2', () => {
  expect(isStrongPassword('rwefo2fji')).toBe(true);
});
test('isStrongPassword expect false test 1', () => {
  expect(isStrongPassword('9startwithnum')).toBe(false);
});
test('isStrongPassword expect false test 1', () => {
  expect(isStrongPassword('exceedsfifteencharsblabla222')).toBe(false);
});


//isDate
test('isDate expect true test 1', () => {
  expect(isDate('01/01/2001')).toBe(true);
});
test('isDate expect true test 2', () => {
  expect(isDate('8/25/2004')).toBe(true);
});
test('isDate expect false test 1', () => {
  expect(isDate('01/01/2a01')).toBe(false);
});
test('isDate expect false test 2', () => {
  expect(isDate('001/03/0222')).toBe(false);
});

//isHexColor
test('isHexColor expect true test 1', () => {
  expect(isHexColor('#fff')).toBe(true);
});
test('isHexColor expect true test 2', () => {
  expect(isHexColor('#fffaaa')).toBe(true);
});
test('isHexColor expect true false 1', () => {
  expect(isHexColor('#zzz')).toBe(false);
});
test('isHexColor expect true false 2', () => {
  expect(isHexColor('#fffffff')).toBe(false);
});