const User = {
    name: "vikas",
    email: "vks@g.com",
    isActive: true
};

function createUser({name: string, isPaid: boolean}) {}

//this is example of weird behaviour of objects in js/ts
//when we directly pass all userData separatly as argument then we can only pass defined arguments , we can't pass extra arguments
//but when when we make an objects userData and then pass it into createUser then it is fine. So this is weird behaviour of js/ts
let userData = {name: "abc", isPaid: false, email: "xyz@g.com" };

createUser(userData);
//in this type function returns an object
function createCourse():{name: string, price: number}{
    return {name: "typescript", price: 199};
}
export{}