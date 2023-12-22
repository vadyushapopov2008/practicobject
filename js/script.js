let car = {
    color: 'orange',
    engine: '2L',
    brand: 'Toyota',
    drive() {
        console.log('driving');
    },
    park: function () {
        console.log('parking');
    },
    start: function () {
        console.log('starting');
    },
    stop() {
        console.log('stopping');
    },
    driver: {
        name: 'Diana',
        lastName: 'Maksimova',
        old: '27',
        category: 'B',
    }
}

console.log(car.driver);
car.stop();
car.driver.name = 'Victoria';
for (let key in car.driver) {
    console.log(car.driver[key])
}
delete car.driver.lastName;
console.log(car.driver);
if ('model' in car) {
    console.log(car.model)
} else {
    console.log('Такого свойства нет')
}
for (let key in car) {
    if (typeof car[key] == 'string') {
        console.log(car[key]);
    }
}
car.driver2 = {
    name: 'Vladimir',
    category: 'D',
}
console.log(car);
var driver2 = car.driver2;
console.log(driver2);
car.start();
car.park();
car.drive();
// let wrapper = document.createElementNS('div.wrapper')
// let navList = document.createElement('ul')
// let navItem = document.createElement('li')
// document.body.appendChild(wrapper)
// wrapper.appendChild(navList)
// navList.appendChild(navItem)
// console.log(wrapper)