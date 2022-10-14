const game_board = new Array(5).fill(0).map(() => new Array(5).fill(0));
let rcount = 0;
let ucount = 0;
let lcount = 0;
let dcount = 0;

function newBoard(){
    for (let i=0; i<5;i++)
    {
        for(let j=0;j<5;j++)
        {
            let random_Number = Math.floor(Math.random() * 10);
            game_board[i][j] = String.fromCharCode(random_Number + 65);
        }
    }
}
newBoard();
console.log(game_board);


function check_right(i,j){
    if (j+1<5){
        if(game_board[i][j]===game_board[i][j+1]){
            rcount = rcount+1;
            console.log( "(" + i + "," + (j) + ")" + " mere right me mila aur uska count: " + rcount);
            check_right();
        }
        rcount = 0;
    }
    else{
        return;
    }
}

function check_up(i,j){
    if (i-1>=0){
        if(game_board[i][j]===game_board[i-1][j]){
            ucount = ucount+1;
            console.log( "(" + (i) + "," + (j) + ")" + " mere upar me mila aur uska count: " + ucount);
            check_up();
        }
        ucount = 0;
    }
    else{
        return;
    }
}
function check_down(i,j){
    if (i+1<5){
        if(game_board[i][j]===game_board[i+1][j]){
            dcount = dcount+1;
            console.log( "(" + (i) + "," + (j) + ")" + " mere neeche me mila aur uska count: " + dcount);
            check_down();
        }
        dcount = 0;
    }
    else{
        return;
    }
}
function check_left(i,j){
    if (j-1>=0){
        if(game_board[i][j]===game_board[i][j-1]){
            lcount = lcount+1;
            console.log( "(" + (i) + "," + (j) + ")" + " mere left me mila aur uska count: " + lcount);

            check_left();
        }
        lcount = 0;
    }
    else{
        return;
    }
}


function abc(){
    for (let i=0; i<5;i++)
    {
        for(let j=0;j<5;j++)
        {

            check_right(i,j);
             
            check_up(i,j);
            
            check_down(i,j);
            
            check_left(i,j);
        }
    }
    console.log(game_board);
}
abc()

function check_up(i, j) {
    if (i - 1 >= 0) {
        if (board[i][j] === board[i - 1][j]) { 
            board[i][j] = null;
            bruh(i - 1, j); 
        }
    }
}