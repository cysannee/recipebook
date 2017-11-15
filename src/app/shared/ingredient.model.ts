// export class Ingredient {
//     public name:string;
//     public amount:number;

//     constructor(name:string,amount:number) {
//         this.name=name;
//         this.amount=amount;
//     }
// }

// below is a shorthand of the above
export class Ingredient {
    constructor(public name:string, public amount:number) {}
}