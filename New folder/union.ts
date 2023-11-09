let data: number | string = 55;

data = "5"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let newUser: User | Admin = {name:"vikas", id: 122};
newUser = {username:"abcd", id: 122}

//use of union in array

let nums: (number | string)[] = ["1",2,4];

//tuples -> it does not exist in javascript, it is a feature of typescript
//we use tuples when we wants to maintain the order of array elements.
let tUser: [number, string] = [1,"vikas"];

type aUser = [number, string]

const nyaUser: aUser = [22, "vikas"]

nyaUser[1] = "rohit"



export{}