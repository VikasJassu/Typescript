const array1: Array<number> = []

function scoreOne(val: number | string): number | string{
    return val
}


function scoreTwo(val: any): any {
    return val
}

function scoreThree<Type>(val: Type): Type {
    return val
}

scoreThree(true);

function scoreFour<T>(val: T): T {
    return val
}

interface Shoes{
    brand: string,
    price: number
}
scoreFour<Shoes>({brand: "nike", price: 4444})

function getSearchResult<T>(products: T[]): T{
    //after doing some operations
    const myIndex = 3
    return products[myIndex] //one thing we must keep in mind that we can return only value which is an element of products array
    //we cannot return value except that.
}

const getMoreResult = <T,>(products: T[]): T => { //on many places we will see in <T,> it means that it is not a tag or JSX element but a generics.
    //after doing some operations
    const myIndex = 5
    return products[myIndex]
}

interface Database{
    connection: string
    user: string
    password: number
}
function anotherFunction<T,U extends Database>(valOne: T, valTwo: U): object{
    return {
        valOne,
        valTwo
    }
}
//here we can specify type of U using extends keyword

anotherFunction(4, {connection:"vikas", user:"vicky", password:4});

//this is a class which is generic and can accept nearly all type of inputs and can accept both of Quiz and Course interfaces
interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    subject: string,
    instructor: string
    price: number
}

class sellable<T>{
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product);
    }
}

//Instanceof is like typeof but it tells us that object is an instance of a class or something else.
// It is used mostly where there is new keyword or not. But there is high potential of presence of new keyword.
function logValue(x: Date | string) {
    if(x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
type Fish = {swim: () => void}
type Bird = {fly: () => void}

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird) {
    if(isFish(pet)) {
        pet
        console.log("it is Fish")
    } else {
        pet
        console.log("it is Bird")
    }
}

interface Circle{
    kind: "Circle"
    radius: number
}

interface Square{
    kind: "Square"
    side: number
}

interface Rectangle{
    kind: "Rectangle"
    length: number
    width: number
}
type Shape = Circle | Square | Rectangle
function GetArea(shape: Shape) {
    switch(shape.kind){
        case "Circle" :
            return Math.PI * shape.radius * shape.radius
        case "Square":
            return shape.side * shape.side
        case "Rectangle":
            return shape.length * shape.width
        
        default:
            const _defaultForShape: never = shape
                return _defaultForShape

    }
}
export{}