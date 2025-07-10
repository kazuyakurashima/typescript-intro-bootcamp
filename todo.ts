enum TodoStatus {
    Todo,       // 未着手 (これは自動的に 0 になります)
    InProgress, // 進行中 (これは自動的に 1 になります)
    Done        // 完了   (これは自動的に 2 になります)
}

// enum（イーナム：列挙型）
// enum は enumeration（列挙） の略で、あらかじめ定義された値の集合（列挙型） を指す言葉です。
// 主にプログラミングで使われ、一定の選択肢（例：色、状態、モードなど）を限定して扱うための型です。
// TodoStatusは、数値が振られている、オブジェクトです。

type Todo = {
    id:string | number;
    // ユニオン型   string,numberを固まりとして連合を組んでる。どっちかでオッケー。
    title:string;
    priority:number;
    status:TodoStatus
    // 列挙型を指定する
};
// type Todo = { ... };     型エイリアスという記法。
// Todoは別名（エイリアス）
// id,titleなどの型を決める→id,titleを変数として宣言
// id,titleは、プロパティ
// TypeScript 独自の記法 です。
// これは、TypeScript の**「型エイリアス（Type Alias）」**という機能を使って、新しい型を定義している部分です。
// { }というここに、Todoという別名（エイリアス）をつけてあげた。

// Todoリスト（配列）
let todoList:Todo[] = [];
// 配列として初期化しておく


// 引数としてタプルのデータを受け取ってTodo型のオブジェクトを返す関数
function createTodo ([title,priority]:[string,number]):Todo {
    const newTodo:Todo = {
        // オブジェクトを新規に作成
        id:Date.now(),
        // 1970年1月1日0時0分0秒からの経過ミリ秒（数字）
        title:title,
        priority:priority,
        status:TodoStatus.Done
        // 列挙型のデータを指定
    };
    return newTodo;
}

// Todoを配列ないに格納するための関数
function addTodo(newTodo:Todo):void {
    todoList.push(newTodo);
}


const firstTodo = createTodo(["そうじ", 2]);
// { id: 1752141815151, title: 'そうじ', priority: 2, status: 2 }

const secondTodo:Todo = createTodo(["洗濯",1]);
// { id: 1752141815151, title: '洗濯', priority: 1, status: 2 }
// ・・・Added;洗濯

addTodo(secondTodo);
// [ { id: 1752141815151, title: 'そうじ→洗濯', priority: 2→1, status: 2 } ]

console.log(firstTodo);
console.log(`Added;${secondTodo.title}`);
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
