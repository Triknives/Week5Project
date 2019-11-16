import { SolarAge } from './../src/solarYears.js';

describe("test age on each planet", () => {

  test("Should return current user age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.userAge).toEqual(32);
  });
  // test("should test 0 answers", () => {
  //   let userAge = new SolarAge(0, "");
  //   expect(userAge.ageCheck()).toEqual("please enter a real number, above 0");
  // });
  test("should calc mercury age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.mercuryAge).toEqual(8);
  });
  test("should calc mars age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.marsAge).toEqual(60);
  });
  test("should calc venus age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.venusAge).toEqual(20);
  });
  test("should calc jupiter age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.jupiterAge).toEqual(380);
  });
  test("should subtract userAge from lifeExpectancy", () => {
    let userAge = new SolarAge(32);
    expect(userAge.earthLifeExpect()).toEqual(47);
  });
  test("should subtract mercuryAge from lifeExpectancy", () => {
    let userAge = new SolarAge(32);
    expect(userAge.mercuryLifeExpect()).toEqual(71);
  });
  test("should subtract marsAge from lifeExpectancy", () => {
    let userAge = new SolarAge(32);
    expect(userAge.marsLifeExpect()).toEqual(71);
  });
});
