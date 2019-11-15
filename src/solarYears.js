
export class SolarAge {
  constructor (userAge){
    this.userAge = userAge;
    this.mercuryAge = Math.round(userAge * .24);
    this.marsAge = Math.round(userAge * 1.88);
    this.lifeExpectancy = 79;
  }
  ageCheck(){
    if (this.userAge <= 0 || isNaN(this.userAge)){
      return "please enter a real number, above 0";
    }
  }
}
