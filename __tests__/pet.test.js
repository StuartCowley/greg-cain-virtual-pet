const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
        const pet2 = new Pet('Eddy');
        expect(pet2.name).toEqual('Eddy');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increments hunger by 5 for every 1 age', () => {
        const pet2 = new Pet('Fido');
        expect(pet2.hunger).toEqual(0);
        pet2.growUp();
        expect(pet2.hunger).toEqual(5);
        pet2.growUp();
        expect(pet2.hunger).toEqual(10);
        pet2.growUp();
        expect(pet2.hunger).toEqual(15);
    })
    it('decreases fitness by 3 for every 1 age', () => {
        const pet3 = new Pet('Fido');
        expect(pet3.fitness).toEqual(10);
        pet3.growUp();
        expect(pet3.fitness).toEqual(7);
        pet3.growUp();
        console.log(pet3);
        expect(pet3.fitness).toEqual(4);
    })
});

describe('walk', () => {
    it('increases fitness by 4', () => {
        const pet = new Pet ('fido');
        pet.fitness = 4;
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to a maximum of 10', () => {
        const pet = new Pet ('fido');
        pet.fitness = 8;
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});