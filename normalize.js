// nullの可能性があります
function normalize(value) {
    if (value == null) {
        // 引数の値がnullかどうか判別
        // undefinedの可能性もある
        throw new Error("null or undefined");
        // エラーとして扱う
    }
    return value;
}
var user = { id: 1, name: "Kazuma" };
var validUser = normalize(user);
console.log(validUser.name);
var nouser = null;
var validNoUser = normalize(nouser);
console.log(validNoUser.name);
