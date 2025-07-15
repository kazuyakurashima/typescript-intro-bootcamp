function isNonEmptyString(x) {
    return typeof x === "string" && x.trim() !== "";
    // trim()→制御文字や両端の半角スペースを削る
    // xがstringであり、かつ中身があれば、trueが返る
}
function validateName(input) {
    if (isNonEmptyString(input)) {
        return input;
    }
    throw new Error("名前を入力してください");
}
try {
    var raw = 200;
    var name_1 = validateName(raw);
    console.log(name_1);
}
catch (e) {
    // エラーがthrowされたらここが実行される
    console.error(e);
}
