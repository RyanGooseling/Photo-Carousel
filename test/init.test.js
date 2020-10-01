test('checks if true equals true', () => {
  expect(true).toBe(true);
});

test('checks if true equals false', () => { // This should fail
  expect(true).toBe(false);
});