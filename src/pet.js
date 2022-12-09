function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
}
Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger = this.age * 5;
    this.age === 0 ? this.fitness = 10 : this.fitness -= this.age * 3;
}
;

module.exports = Pet;