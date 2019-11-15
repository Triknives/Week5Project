
export class SolarAge {
  constructor (userAge){
    this.userAge = userAge;
    this.mercuryAge = Math.round(userAge * .24);
    this.marsAge = Math.round(userAge * 1.88);
    this.lifeExpectancy = 79;
  }
  ageCheck(){
    if (this.userAge <= 0){
      return "please give a number above 0";
    }
  }
}
