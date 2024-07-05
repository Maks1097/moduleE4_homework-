const smartphone = {
    type: 'smartphone'
}
const obj = Object.create(smartphone)
obj.Samsung = 'galaxy S24'
obj.Apple = '15 Pro Max'
obj.Xiaomi = '14 Ultra'

function keyOutput () {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key])
        }
    }
}
keyOutput(obj)