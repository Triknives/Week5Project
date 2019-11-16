
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

  mercuryLifeExpect(userAge, lifeExpectancy){
    let mercuryLifeExpect = Math.round(this.lifeExpectancy - this.mercuryAge);
    return mercuryLifeExpect;
  }

  marsLifeExpect(userAge, lifeExpectancy){
    let marsLifeExpect = Math.round(this.lifeExpectancy - this.marsAge);
    return marsLifeExpect;
  }
}




    // if (this.userAge <= 0 || isNaN(this.userAge)){
    //   return "please enter a real number, above 0";
