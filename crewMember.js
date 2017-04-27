class CrewMember {
  constructor(position, spaceship){
    this.position = position;

    if(spaceship){
      this.currentShip = spaceship;

    } else {
      //note this.currentShip will call an instance of currentShip on this!
      this.currentShip = 'Looking for a Rig';
    }
  }

  chargePhasers() {
    //thi.currentShip refers to an instance of the spaceship object
      if(this.currentShip !== 'Looking for a Rig' && this.position === 'Gunner') {
          this.currentShip.phasersCharge = 'charged!';
      } else {

        return 'had no effect'
      }
    }

    setsInvisibility() {
      if(this.currentShip !== 'Looking for a Rig' && this.position === 'Defender') {
        this.currentShip.cloaked = true
      } else {
        return 'had no effect'
      }
    }

  engageWarpDrive() {
    if(this.currentShip !== 'Looking for a Rig' && this.position === 'Pilot') {
      this.currentShip.warpDrive = 'engaged!'
    } else {
      return 'had no effect'
    }
  }
}
