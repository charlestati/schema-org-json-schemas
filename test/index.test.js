/* eslint-disable global-require */

describe("GARN", () => {
  it("should require the JSON Schema of Person", () => {
    const { Person } = require("..");
    expect(Person).toMatchSnapshot();
  });
});

/* eslint-enable global-require */
