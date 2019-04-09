function Apple(weight) {
    this.weight = weight;

    this.isEmpty = function () {
        if(this.weight > 0)
            return false;
        else
            return true;
    }

    this.decrease = function () {
        this.weight -= 1;
    }

    this.getWeight = function () {
        return this.weight;
    }


};

function Human(name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.isMale = function () {
        return gender == "Male";
    }

    this.setGender = function (boolean) {
        this.gender = boolean;
    }

    this.checkApple = function (Apple) {
        return Apple.isEmpty();
    }

    this.eat = function (Apple) {
        Apple.decrease();
    }

    this.say = function (mes) {
        alert("" + this.name + " say: " + mes);
    }

    this.getName = function () {
        return this.name;
    }
    
    this.setName = function (name) {
        this.name = name;
    }

    this.getWeight = function () {
        return this.weight;
    }

    this.setWeight = function (weight) {
        this.weight = weight;
    }
};

let adam = new Human("Adam", "Male", 70);
let eva = new Human("Eva", "Female", 45);
let apple = new Apple(6);

while(true){
    if(adam.checkApple(apple)) {
        adam.say("Out of Apple!");
        break;
    } else{
        adam.setWeight(adam.getWeight() + 1);
        adam.eat(apple);
        if(eva.checkApple(apple)){
            eva.say("Out of Apple!");
            break;
        }else{
            eva.setWeight(eva.getWeight() + 1);
            eva.eat(apple);
        }
    }
};





