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
        pet.growUp();
        expect(pet.age).toEqual(2);
    });
    it('increments hunger by 5 for every 1 age', () => {
        const pet2 = new Pet('Fido');
        expect(pet2.hunger).toEqual(0);
        pet2.growUp();
        expect(pet2.hunger).toEqual(5);
    })
    it('decreases fitness by 3 for every 1 age', () => {
        const pet3 = new Pet('Fido');
        expect(pet3.fitness).toEqual(10);
        pet3.growUp();
        expect(pet3.fitness).toEqual(7);
        pet3.growUp();
        expect(pet3.fitness).toEqual(4);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 31;
        expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(');
    });

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
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.hunger = 11;
        expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
    });
});

describe('feed', () => {
    it('decreases hunger by 3', () => {
        const newPet = new Pet ('Lily');
        newPet.growUp();
        newPet.feed();
        expect(newPet.hunger).toEqual(2);
    });
    it('decreases hunger to a minimum of 0', () => {
        const pet = new Pet ('Eddy')
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Fido');
        pet.age = 30;
        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
});

describe('checkUp', () => {
    it('returns i need a walk if fitness is 3 or less', () => {
        const pet = new Pet ('Alfie');
        pet.fitness = 2;
        pet.checkUp();
        expect(pet.checkUp()).toBe('I need a walk')
    });
    it('returns i am hungry if hunger is 5 or more', () => {
        const pet2 = new Pet ('Chouchou');
        pet2.hunger = 6;
        pet2.checkUp();
        expect(pet2.checkUp()).toBe('I am hungry')
    });
    it('returns i am hungry and i need a walk if both above are true', () => {
        const pet3 = new Pet ('Eddy');
        pet3.hunger = 6;
        pet3.fitness = 2;
        pet3.checkUp();
        expect(pet3.checkUp()).toBe('I am hungry AND I need a walk');
    });
    it('returns i feel great if the none of the above is true', () => {
        const pet4 = new Pet ('Almond');
        pet4.hunger = 2;
        pet4.fitness = 4;
        pet4.checkUp();
        expect(pet4.checkUp()).toBe('I feel great!');
    });
});

describe('isAlive', () => {
    it('it returns false when fitness is 0 or less', () => {
        const pet = new Pet ('Fido');
        pet.fitness = -1;
        expect(pet.isAlive).toBe(false);
    });
    it('returns false when hunger is 10 or more', () => {
        const pet2 = new Pet ('Rex');
        pet2.hunger = 11;
        pet2.isAlive;
        expect(pet2.isAlive).toBe(false);
    });
    it('returns false when age is 30 or more', () => {
        const pet3 = new Pet ('Spot');
        pet3.age = 30;
        expect(pet3.isAlive).toBe(false);
    })
    it('returns true if everything in healthy level', () => {
        const pet4 = new Pet ('Lily');
        expect(pet4.isAlive).toBe(true);
    });
});