var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Todo"] = 0] = "Todo";
    TodoStatus[TodoStatus["InProgress"] = 1] = "InProgress";
    TodoStatus[TodoStatus["Done"] = 2] = "Done"; // 完了   (これは自動的に 2 になります)
})(TodoStatus || (TodoStatus = {}));
// type Todo = { ... };     型エイリアスという記法。
// Todoは別名（エイリアス）
// id,titleなどの型を決める→id,titleを変数として宣言
// id,titleは、プロパティ
// TypeScript 独自の記法 です。
// これは、TypeScript の**「型エイリアス（Type Alias）」**という機能を使って、新しい型を定義している部分です。
// { }というここに、Todoという別名（エイリアス）をつけてあげた。
// Todoリスト（配列）
var todoList = [];
// 配列として初期化しておく
// 引数としてタプルのデータを受け取ってTodo型のオブジェクトを返す関数
function createTodo(_a) {
    var title = _a[0], priority = _a[1];
    var newTodo = {
        // オブジェクトを新規に作成
        id: Date.now(),
        // 1970年1月1日0時0分0秒からの経過ミリ秒（数字）
        title: title,
        priority: priority,
        status: TodoStatus.Done
        // 列挙型のデータを指定
    };
    return newTodo;
}
// Todoを配列ないに格納するための関数
function addTodo(newTodo) {
    todoList.push(newTodo);
}
var firstTodo = createTodo(["そうじ", 2]);
var secondTodo = createTodo(["洗濯", 1]);
// オブジェクトを作成してmyTodoに格納する
addTodo(secondTodo);
console.log(firstTodo);
console.log("Added;".concat(secondTodo.title));
console.log(todoList);
// 引数が配列になっている.createTodo( [ ] )
// 配列は、[title,priority]という配列。
// そこに、別々の型がついている: [string, number]
// つまり、型と順番が決まった複数要素（＝タプル）。これが配列になっている。
// 返り値は、Todo型になります
// ✅ そう！タプルで受け取って、それを「title」と「priority」という
// ✅ 変数に一気にばらして代入（分割代入）してるの！
// 💡具体的に見てみよう！
// 💌この関数：
// function createTodo([title, priority]: [string, number])
// これは、こういう「タプル」な引数を想定してるの：
// ["買い物", 1]
// 🎁この時点では…
// ["買い物", 1] はただの「2つの要素が順番に入ってる配列（タプル）」
// それを createTodo() に渡すときに…
// createTodo(["買い物", 1])
// このタプルを、引数の [title, priority] に渡すと…
// 🎉こうなる！分割代入！
// // 呼び出されたときのイメージ
// function createTodo(["買い物", 1]) {
//     const title = "買い物";
//     const priority = 1;
// }
// ↑ こうやって 中身を一気に「ばらして使える」 のが分割代入（destructuring）なんだよっ💕
