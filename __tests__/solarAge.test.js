import { SolarAge } from './../src/solarYears.js';

describe("test age on each planet", () => {

  test("Should return current user age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.userAge).toEqual(32);
  });
  test("should test 0 answers", () => {
    let userAge = new SolarAge(0);
    expect(userAge.getAge()).toEqual("please give a number above 0");
  });
  test("should test 0 answers", () => {
    let userAge = new SolarAge(32);
    expect(userAge.getAge()).toEqual(8);
  });
  test("should test 0 answers", () => {
    let userAge = new SolarAge(32);
    expect(userAge.getAge()).toEqual(8);
  });
});
