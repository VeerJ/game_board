const game_board = new Array(5).fill(0).map(() => new Array(5).fill(0));
const board = new Array(5).fill(0).map(() => new Array(5).fill(0));
let visited = new Array(5).fill(0).map(() => new Array(5).fill(0));
let count = 1;
let visited_veer = {};
let g = new Array().map(() => new Array(2));
let visitcount = 0;
let ansarr = [];

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
        g = [];
        // console.log(v);
        n = minify_board(v);
        dfs(n, v);
    }
}
function dfs(n, v) {
    for (let r = 0; r < g.length; r++) {
        let element = g[r];
        let i = element[0]
        let j = element[1];
        if (visited_veer[element] === false && board[i][j] === '*') {
            bruh(i, j);
            if (visitcount > 2) {
                console.log(v + ": " + visitcount);
                ansarr.push(v);
            }
            visitcount = 0;
        }
        // console.log("::::::::::::::::::::::::::::::::::::::::::::::::::::: ");
    }
}
function bruh(a, b) {
    let elebruh = updateVal(a, b);
    // console.log(visited_veer);
    // console.log("elebruh: " + elebruh + "visitedcount: " + visitcount);
    visited_veer[elebruh] = true;
    check_self(a, b);
    check_down(a, b);
    check_left(a, b);
    check_up(a, b);
    check_right(a, b);
}
function check_right(i, j) {
    let eleright = updateVal(i, j);
    //console.log("eleright: " + eleright + " | visitedcount: " + visitcount);
    if (j + 1 < 5) {
        if (board[i][j + 1] === '*') {
            visitcount++;
            board[i][j + 1] = null;
            // console.log("updated board after check_right for: " + v);
            // console.log(board);
            let rightj = j + 1;
            bruh(i, rightj);
        }
    }
    return;
}
function check_up(i, j) {
    let eleup = updateVal(i, j);
    // console.log("eleup: " + eleup + " | visitedcount: " + visitcount);
    if (i - 1 >= 0) {
        if (board[i - 1][j] === '*') {
            visitcount++;
            board[i - 1][j] = null;
            console.log("updated board after check_up for: " + v);
            console.log(board);
            let up_i = i - 1;
            bruh(up_i, j);
        }
    }
    return;
}
function check_down(i, j) {
    let eledown = updateVal(i, j);
    // console.log("eledown: " + eledown + " | visitedcount: " + visitcount);
    if (i + 1 < 5) {
        if (board[i + 1][j] === '*') {
            visitcount++;
            board[i + 1][j] = null;
            // console.log("updated board after check_down for: " + v);
            // console.log(board);
            let downi = i + 1;
            bruh(downi, j);
        }
    }
    return;
}
function check_left(i, j) {
    let eleleft = updateVal(i, j);
    // console.log("eleleft: " + eleleft + " | visitedcount: " + visitcount);
    if (j - 1 >= 0) {
        if (board[i][j - 1] === '*') {
            visitcount++;
            board[i][j - 1] = null;
            // console.log("updated board after check_left for: " + v);
            // console.log(board);
            let leftj = j - 1;
            bruh(i, leftj);
        }
    }
    return;
}
function check_self(i, j) {
    if (board[i][j] === '*') {
        visitcount++;
        board[i][j] = null;
        // console.log("updated board after check_self for: " + v);
        // console.log(board);

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
    // console.log(board);
    // console.log("g: ")
    // console.log(g);
    // console.log("visited");
    // console.log(visited_veer);
    return count;
}

iterate_all_symbols();
console.log("ansarr = " + ansarr);
// for (let ff = 0; ff < g.length; ff++) {
//     visited_veer[g[ff]] = false;
// }
