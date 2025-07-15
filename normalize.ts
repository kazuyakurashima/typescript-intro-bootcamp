type User = { id:number,name:string } | null;
// nullの可能性があります

function normalize<T>(value:T):NonNullable<T> {
    if(value == null){
        // 引数の値がnullかどうか判別
        // undefinedの可能性もある
        throw new Error("null or undefined");
        // エラーとして扱う
    }
    return value;
}

const user:User = {id:1,name:"Kazuma"};
const validUser:User = normalize<User>(user);
console.log(validUser.name);

const nouser = null;
const validNoUser:User = normalize<User>(nouser);
console.log(validNoUser.name);
