function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}
Pet.prototype.growUp = function() {
    const ADD_HUNGER = 5;
    const TAKE_FITNESS = 3;
    this.age += 1;
    this.hunger = this.age * ADD_HUNGER;
    this.fitness -= TAKE_FITNESS;
}

Pet.prototype.walk = function () {
    const MAXIMUM_FITNESS = 10;
    const ADD_FITNESS = 4;
    (this.fitness + ADD_FITNESS) <= MAXIMUM_FITNESS ? this.fitness += ADD_FITNESS : this.fitness = MAXIMUM_FITNESS;
}
;

module.exports = Pet;