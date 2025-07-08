enum TodoStatus {
    Todo,       // 未着手 (これは自動的に 0 になります)
    InProgress, // 進行中 (これは自動的に 1 になります)
    Done        // 完了   (これは自動的に 2 になります)
}

// enum（イーナム：列挙型）
// enum は enumeration（列挙） の略で、あらかじめ定義された値の集合（列挙型） を指す言葉です。
// 主にプログラミングで使われ、一定の選択肢（例：色、状態、モードなど）を限定して扱うための型です。

type Todo = {
    id:string | number;
    // ユニオン型   string,numberを固まりとして連合を組んでる。どっちかでオッケー。
    title:string;
    priority:number;
    status:TodoStatus
    // 列挙型を指定する
};
// type Todo = { ... };     型エイリアスという記法。
// TypeScript 独自の記法 です。
// これは、TypeScript の**「型エイリアス（Type Alias）」**という機能を使って、新しい型を定義している部分です。
// { }というここに、Todoという別名・あだ名というエイリアスをつけてあげた。


// Todoリスト（配列）
let todoList:Todo[] = [];
// 配列として初期化しておく

// 引数としてタプルのデータを受け取ってTodo型のオブジェクトを返す関数
function createTodo([title,priority]:[string,number]):Todo{
    const newTodo:Todo = {
        // オブジェクトを新規に作成
        id:Date.now(),
        // 1970年1月1日0時0分0秒からの経過ミリ秒（数字）
        title:title,
        priority:priority,
        status:TodoStatus.Todo
        // 列挙型のデータを指定
    };
    return newTodo;
}

// Todoを配列ないに格納するための関数
function addTodo(todo:Todo):void {
    todoList.push(todo);
    console.log(`Added;${todo.title}`);
    // 表示用
}

const myTodo:Todo = createTodo(["プログラム作成",1]);
// オブジェクトを作成してmyTodoに格納する

addTodo(myTodo);
console.log(todoList);
