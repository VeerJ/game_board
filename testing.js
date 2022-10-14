// initialize array
// let arr = [

// ];
let a = new Array();

// append new value to the array
// arr.push("{'test' : 2}");
// a= arr[1].split(",");
// console.log(a);

// for (let i=0;i<3;i++){
//     console.log(arr[i]);
//     a = arr[i].split(",");
//     console.log(a);
//     f_value = a[0];
//     console.log("i ki value is" + f_value[0]);
// }

// let i=0;
// let j=1;

// updateVal(i,j)
//     let ans = (i.toString() + "," + j.toString(); 
//     return ans;
// }

// function newBoard(){
//     for (let i=0; i<5;i++)
//     {
//         for(let j=0;j<5;j++)
//         {
//             let random_Number = Math.floor(Math.random() * 10);
//             game_board[i][j] = String.fromCharCode(random_Number + 65);
//             board[i][j] = String.fromCharCode(random_Number + 65);
//         }
//     }
// }
// newBoard();
// console.log(game_board);

var g = new Array().map(() => new Array(2));
g.push([1,2]);
g.push([3,2]);
g.push([1,4]);
g.push([3,4]);
// console.log("g[1]: "+g[1]);
// let ele = g[0];
// console.log("ele: "+ele);
// console.log("ele[0]: "+ele[0]);//1

let visited = {};
for (let ff=0;ff<g.length;ff++){
    visited[g[ff]] = false;
}

console.log(visited);

for (let bruh=0;bruh<g.length;bruh++){
    ele = g[bruh];
    if (visited[ele] === false){
        visited[ele] = true;
    }
}
let ekvalue = [1,2];

visited[ekvalue] = true;
// if(visited[ekvalue]===undefined){
//     visited[ekvalue] = false;
// }
console.log(visited);





