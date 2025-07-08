var username = "Kazuya Kurashima";
var age = 51;
function getUserInfo(uname, uage) {
    return [uname, uage];
}
// 引数の型注釈     (uname:string,uage:number)
// f(x:number)
// 戻り値の型       :[string,number]
// f(x:string, y:number):[string, number]
var _a = getUserInfo(username, age), getUname = _a[0], getUage = _a[1];
console.log(getUname);
