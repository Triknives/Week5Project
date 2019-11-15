
export class SolarAge {
  constructor (userAge){
    this.userAge = userAge;
    this.lifeExpectancy = 79;
  }
  getAge(){
    if (this.userAge <= 0){
      return "please give a number above 0";
    }
    else {
      this.mercuryAge = Math.round(this.userAge * .24);
      return "Heres the ages!";
    }
  }
}
