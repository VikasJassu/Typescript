interface User{
    readonly dbId: number
    email: string,
    password: number,
    googleId?: string,
    //startTrail: () => string
    startTrail(): string //here we have two methods to write function
    getCoupon(couponname: string, value: number): number
}

//we can add new values to existing intefaces

interface User{
    githubToken: string,
}

//interfaces also supports inhertance , here admin have all properties of user and can have its own additional properties.
interface Admin extends User {
    role: "admin" | "ta" | "owner"
}

const vikas: Admin = {dbId: 12, email: "v@v.com", password: 1234, githubToken: "git", role: "admin",
 startTrail: () => {
    return "trail started"
 },
 getCoupon: (name: "vikas", off: 10) => { // it is not compulsory to match arguments name with function defination
    return 10
 }
}


vikas.email = "a@a.com"