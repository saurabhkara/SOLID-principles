class BaseBird {
    makeSound() {
        console.log('Bird can Chirp')
    }
}

class Bird extends BaseBird {
    fly() {
        console.log('Bird can fly');
    }

}


class Sparrow extends Bird {
    fly() {
        console.log('Sparrow can fly');
    }

    makeSound(): void {
        console.log('Sparrow Sound')
    }
}

class Panguins extends BaseBird {

    makeSound(): void {
        console.log("Panguin sound")
    }
}

function birdFly(bird: BaseBird) {
    bird.makeSound()
}

birdFly(new Panguins())