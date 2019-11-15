import { SolarAge } from './../src/solarYears.js';

describe("user starting age", () => {
  test("Should return current user age", () => {
    let userAge = new SolarAge(32);
    expect(userAge.userAge).toEqual(32);
  });
  describe("test if user can enter 0 or less", () => {
    test("should test 0 answers", () => {
      let userAge = new SolarAge(0);
      expect(userAge.getAge()).toEqual("please give a number above 0");
    });
    describe("test if user can enter 0 or less", () => {
      test("should test 0 answers", () => {
        let userAge = new SolarAge(32);
        expect(userAge.getAge()).toEqual(8);
      });
    });
  });
});
