let username:string = "Kazuya Kurashima";
let age:number = 51;

function getUserInfo(uname:string,uage:number):[string,number] {
    return[uname,uage];
}

// 引数の型注釈     (uname:string,uage:number)
    // f(x:number)
// 戻り値の型       :[string,number]
    // f(x:string, y:number):[string, number]
    // タプル型：順序付きの複数の要素の集まりを意味します。
    // 特に、Pythonなどのプログラミング言語では「変更できないリスト（immutable list）」として使われます。
    // tuple:ラテン語の「-plus」（folded、重なった）に由来し、数学用語として「single, double, triple」などの派生形に基づいて形成された比較的新しい語です（特にIT分野で）。


const [getUname,getUage] = getUserInfo(username,age);
// 分割代入をしている。getUserInfoという関数の返り値であるオブジェクトをバラバラにして、それぞれgetUnameとgetUageに代入
// 分割代入の型指定は、次のように指定する
// const [getUname, getUage]: [string, number] = getUserInfo(username, age);
console.log(getUname);