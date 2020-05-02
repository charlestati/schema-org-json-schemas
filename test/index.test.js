/* eslint-disable global-require */

it("should require the JSON Schema of Person", () => {
  const { Person } = require("..");
  expect(Person).toMatchSnapshot();
});
