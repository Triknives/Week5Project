import { SolarAge } from './../src/solarYears.js';

describe("user starting age", () => {
  test("Should return current user age", () => {
    let age = new SolarAge(32);
    console.log(age);
    expect(age.userAge).toEqual(32);
  });
});
