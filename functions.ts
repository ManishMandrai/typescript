function addTwo(num) {
  return num + 2;
}
function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = true) => {};

addTwo(5);
getUpper("manissh");
signUpUser("Manish", "manish@vs.com", true);
loginUser("m", "m@m.com", true)


// function getValue(myVal : number)  : boolean {
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s : string) : string => {
    return ""
}

// const heros = ["thor", "ironman", "spiderman"]
const heros = [1, 2, 3]

heros.map(hero => {
    return  `hero is ${hero}`
})



export {};
