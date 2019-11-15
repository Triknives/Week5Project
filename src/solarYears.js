
export class SolarAge {
  constructor (userAge){
    this.userAge = userAge;
  };
  constructor (mercuryAge){
    this.mercuryAge = mercuryAge;
    mercuryAge = (userAge * 365)/88;
  }
};
