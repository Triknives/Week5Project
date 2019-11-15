import { SolarAge } from './../src/solarYears.js';

describe("test age on each planet", () => {

  test("Should return current user age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.userAge).toEqual(32);
  });
  test("should test 0 answers", () => {
    let userAge = new SolarAge(0);
    expect(userAge.ageCheck()).toEqual("please give a number above 0");
  });
  test("should cacl mercury age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.mercuryAge).toEqual(8);
  });
  test("should calc mars age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.marsAge).toEqual(60);
  });
});
