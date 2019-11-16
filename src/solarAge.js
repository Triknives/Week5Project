
// object utilized to hold planet solar formula to put against user age
export class SolarAge {
  constructor (userAge){
    this.userAge = userAge;
    this.mercuryAge = Math.round(userAge * .24);
    this.marsAge = Math.round(userAge * 1.88);
    this.venusAge = Math.round(userAge * .62);
    this.jupiterAge = Math.round(userAge * 11.86);
    this.lifeExpectancy = 79;
  }

  //logic to assess user inputs and rule out NaN and less than 0 inputs.
  ageCheck(){
    if (this.userAge <= 0 || isNaN(this.userAge)){
      return "please enter a real number, above 0";
    }
  }
  // logic to calculate years "left" after taking user's from each planet, and taking it from U.S based life life expectancy.
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
    venusLifeExpect(userAge, lifeExpectancy){
      let venusLifeExpect = Math.round(this.lifeExpectancy - this.venusAge);
      return venusLifeExpect;
    }
    jupiterLifeExpect(userAge, lifeExpectancy){
      let jupiterLifeExpect = Math.round(this.lifeExpectancy - this.jupiterAge);
      return jupiterLifeExpect;
    }
  }
