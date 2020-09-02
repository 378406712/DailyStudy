class CoolGuy {
  constructor(trick) {
    this.specialTrick = trick
  }
 
  showoff() {
    console.log('here is my trick: ', this.specialTrick)
  }
}

var Joe = new CoolGuy('jumping rope')
Joe.showoff()
