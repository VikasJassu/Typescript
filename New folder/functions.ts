
function addTwo(num: number):number {
    return num + 2;
}

let getSum = (num: number):number => {
    return 0;
}

function signUp(email: string, password:number, type: boolean = true){
    return true;
}

signUp("vks@vks.com",4);

const items = ["table", "chair", "glass"];

items.map((item: string):string => {
    return `item is ${item}`;
});


function consoleError(errMsg: string): void { // we should explicitly define the return type of function that it return void
    return console.log(errMsg);
}

function handleError(errMsg: string): never { // in case of error handling we should define return type as never.
    //using never return type means that function throws an exception or terminates the execution of the program.
    throw new Error(errMsg);
}


export{}

