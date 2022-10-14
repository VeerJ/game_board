const game_board = new Array(5).fill(0).map(() => new Array(5).fill(0));
const board = new Array(5).fill(0).map(() => new Array(5).fill(0));
let visited = new Array(5).fill(0).map(() => new Array(5).fill(0));
let count = 1;
let visited_veer = {};
let g = new Array().map(() => new Array(2));
let visitcount = 0;

function newBoard() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let random_Number = Math.floor(Math.random() * 10);
            game_board[i][j] = String.fromCharCode(random_Number + 65);
        }
    }
}
newBoard();
console.log(game_board);

function iterate_all_symbols() {
    for (let char = 65; char < 75; char++) {
        v = String.fromCharCode(char);
        n = minify_board(v);
        dfs(n, v);
    }
}
function dfs(n, v, i, j) {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let eledfs = updateVal(i, j);
            console.log("eledfs: " + eledfs);
            if (board[i][j] === '*') {
                bruh(i, j);
                if (visitcount > 3) {
                    console.log(v + ": " + visitcount);
                }
                visitcount = 0;
            }
        }
    }
}
function bruh(a, b) {
    c = a;
    d = b;
    let elebruh = updateVal(c, d);
    // console.log(visited_veer);
    console.log("elebruh: " + elebruh + "visitedcount: " + visitcount);
    visited_veer[elebruh] = true;
    visitcount++;
    check_down(a, b);
    check_left(a, b);
    check_up(a, b);
    check_right(a, b);
}
function check_right(i, j) {
    if (j + 1 < 5) {
        if (board[i][j + 1] === '*') { 
            board[i][j] = null;
            bruh(i, j + 1); 
        }
    }
}
function check_up(i, j) {
    if (i - 1 >= 0) {
        if (board[i][j] === board[i - 1][j]) { 
            board[i][j] = null;
            bruh(i - 1, j); 
        }
    }
}
function check_down(i, j) {
    if (i + 1 < 5) {
        if (board[i][j] === board[i + 1][j]) { 
            board[i][j] = null;
            bruh(i + 1, j); 
        }
    }
}
function check_left(i, j) {
    if (j - 1 >= 0) {
        if (board[i][j] === board[i][j - 1]) { 
            board[i][j] = null;
            bruh(i, j - 1); 
        }
    }
}
function updateVal(i, j) {
    return ([i, j]);
}
function minify_board(a) {
    count = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (game_board[i][j] === a) {
                board[i][j] = '*';
                count = count + 1;
                g.push(updateVal(i, j));
            }
            else {
                board[i][j] = null;
            }
        }
    }
    for (let ff = 0; ff < g.length; ff++) {
        if (visited_veer[g[ff]] === undefined) { visited_veer[g[ff]] = false; }
    }
    return count;
}

iterate_all_symbols();
// for (let ff = 0; ff < g.length; ff++) {
//     visited_veer[g[ff]] = false;
// }

