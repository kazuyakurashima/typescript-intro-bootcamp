function isNonEmptyString(x:unknown):x is string{
    return typeof x === "string" && x.trim() !== "";
    // trim()→制御文字や両端の半角スペースを削る
    // xがstringであり、かつ中身があれば、trueが返る
}

function validateName(input:unknown):string{
    if(isNonEmptyString(input)){
        return input;
    }
    throw new Error("名前を入力してください");
}

try{
    // 以下、文字なら表示、それ以外ならエラーになる。
    const raw:unknown = 'Sekky';
    const name:string = validateName(raw);
    console.log(name)
}
catch(e){
    // エラーがthrowされたらここが実行される
    console.error(e)
}