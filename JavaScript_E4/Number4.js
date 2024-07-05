function Device() {
    this.pluggedIn = function () {
        return this._isPluggedIn
    }
}

function Compucter(name, brand, color, backlight, power) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.backlight = backlight;
    this.power = power;
    this._isPluggedIn = true;
}

function TV(name, brand, color, diagonal, power) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.diagonal = diagonal;
    this.power = power;
    this._isPluggedIn = true;
}

function Beater(name, brand, color, power) {
    this.name = name;
    this.brand = brand;
    this.color = color;
    this.power = power;
    this._isPluggedIn = false;
}

Compucter.prototype = new Device()
TV.prototype = new Device()
Beater.prototype = new Device()

const compucter = new Compucter('Compucter', 'Asus', 'Grey', true, 1488);
const tv = new TV('TV', 'Sony', 'Black', 80, 52);
const beater = new Beater('Beater', 'Bosch', 'red', 0);

console.log(compucter)
console.log(tv)
console.log(beater)

function sumPowerAllDevices(...devices) {
    let sumPower = 0;

    devices.forEach(device => {
        if (device.pluggedIn()) {
            sumPower += device.power;
        }
    })
    return sumPower;
}

const sumPower = sumPowerAllDevices(compucter, tv, beater)
console.log(`Sum power all devices is ${sumPower}w`)