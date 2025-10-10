const num = 4
const obj = {}

if (num > 5) {
    obj.name = "Valami történt";
} else {
    obj["name"] = "Valami nem történt";
}

console.log(obj)
console.log(obj["name"])

if (obj.age == undefined) {
    console.log("nincs érték undefined")
}

if (obj.age == null) {
    console.log("nincs érték null")
}