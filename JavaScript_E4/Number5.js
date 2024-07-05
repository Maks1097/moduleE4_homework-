class Device {
    constructor() {
        this.pluggedIn = function () {
            return this._isPluggedIn
        }
    }
}

class Compucter extends Device {
    constructor(name, brand, color, backlight, power, pluggenIn) {
        super(pluggenIn)
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.backlight = backlight;
        this.power = power;
        this._isPluggedIn = true;
    }
}

class TV extends Device {
    constructor(name, brand, color, diagonal, power, pluggenIn) {
        super(pluggenIn);
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.diagonal = diagonal;
        this.power = power;
        this._isPluggedIn = true;
    }
}

class Beater extends Device {
    constructor(name, brand, color, power, pluggenIn) {
        super(pluggenIn);
        this.name = name;
        this.brand = brand;
        this.color = color;
        this.power = power;
        this._isPluggedIn = true;
    }
}

const compucter = new Compucter('Compucter', 'Asus', 'Grey', true, 1488);
const tv = new TV('TV', 'Sony', 'Black', 80, 52);
const beater = new Beater('Beater', 'Bosch', 'red', 0)

console.log(compucter)
console.log(tv)
console.log(beater)

function sumPowerAllDevices(...devices) {
    let sumPower = 0
    devices.forEach(device => {
        if (device.pluggedIn()) {
            sumPower += device.power
        }
    })
    return sumPower
}

const sumPower = sumPowerAllDevices(compucter, tv, beater)
console.log(`Sum power all devices is ${sumPower}w`)