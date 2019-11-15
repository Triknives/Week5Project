
export class SolarAge {
  constructor (userAge){
    this.userAge = userAge;
    this.mercuryAge = Math.round(userAge * .24);
    this.marsAge = Math.round(userAge * 1.88);
    this.venusAge = Math.round(userAge * .62);
    this.jupiterAge = Math.round(userAge * 11.86);
    this.lifeExpectancy = 79;
  }
  earthLifeExpect(userAge, lifeExpectancy){
    let earthLifeExpect = Math.round(this.lifeExpectancy - this.userAge);
      return earthLifeExpect;
    }
  }
    // if (this.userAge <= 0 || isNaN(this.userAge)){
    //   return "please enter a real number, above 0";
