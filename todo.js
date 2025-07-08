var TodoStatus;
(function (TodoStatus) {
    TodoStatus[TodoStatus["Todo"] = 0] = "Todo";
    TodoStatus[TodoStatus["InProgress"] = 1] = "InProgress";
    TodoStatus[TodoStatus["Done"] = 2] = "Done";
})(TodoStatus || (TodoStatus = {}));
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
        status: TodoStatus.Todo
        // 列挙型のデータを指定
    };
    return newTodo;
}
// Todoを配列ないに格納するための関数
function addTodo(todo) {
    todoList.push(todo);
    console.log("Added;".concat(todo.title));
    // 表示用
}
var myTodo = createTodo(["プログラム作成", 1]);
// オブジェクトを作成してmyTodoに格納する
addTodo(myTodo);
console.log(todoList);
