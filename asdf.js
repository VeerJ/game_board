const game_board = new Array(5).fill(0).map(() => new Array(5).fill(0));
const board = new Array(5).fill(0).map(() => new Array(5).fill(0));
let visited = new Array(n).fill(false);
count = 1;


function newBoard(){
    for (let i=0; i<5;i++)
    {
        for(let j=0;j<5;j++)
        {
            let random_Number = Math.floor(Math.random() * 10);
            game_board[i][j] = String.fromCharCode(random_Number + 65);
            board[i][j] = String.fromCharCode(random_Number + 65);
        }
    }
}
newBoard();
console.log(game_board);

function iterate_all_symbols(){
    for (i=65;i<75;i++)
    {
        v = String.fromCharCode(i);
        dfs(v);
    }
}


function dfs(v){
    n = minify_board(v);;
    g = adjacency_array(v);

}
function adjacency_array(v){
    let list = new Array();
    for (let i=0; i<5;i++)
    {
        for(let j=0;j<5;j++)
        {
        }
    }

}

function get_i(q){ //q is array
    let a = q.split(",");
    let f_value = a[0];
    return f_value;
}
function get_j(q){ //q is array
    let a = q.split(",");
    let f_value = a[1];
    return f_value;
}
function updateVal(i,j){
    let ans = (i.toString() + "," + j.toString()); 
    return ans;
}



function minify_board(v){
    for (let i=0; i<5;i++)
    {
        for(let j=0;j<5;j++)
        {
            if(board[i][j]===v)
            {
                board[i][j]='*';
                count = count + 1;
                g.push(updateVal(i,j));
            }
            else{
                board[i][j]=null;
            }
        }
    }
    return count;
}
iterate_all_symbols();