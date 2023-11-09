abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia():void

    getReelsCount():number {
        //after some complex calculations
        return 3
    }
}
//const obj = new TakePhoto("test", "test")
// We can use abstract keyword to define a method/function without definition. We will leave it for
// later that we can define it as our requirement.
// Constructors for derived classes must contain a super call.

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public color: string
    ) {
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia")
    }
}

const obj = new Instagram("test", "test", "red");
obj.getReelsCount();

export{}