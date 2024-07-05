const obj = new Object()
console.log(obj)
obj.a = 'SigmaMessi'
obj.b = 52
obj.c = true
obj.f = function Sigma () {
    console.log(52)
}
console.log(obj)
delete obj.c
console.log(obj)