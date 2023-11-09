class User{
    private _customerId = 1
    readonly city: string = "Jaipur"
    constructor(public email: string, public password: number) {
        //
    }

    get getAppleEmail():string {
        return `apple email is ${this.email}`
    }

    get CustomerId(): number {
        return this._customerId
    }
    set CustomerId(customNum) {
        this._customerId = customNum
    }

}

const vikas = new User("vks@g.com", 123);

export{}