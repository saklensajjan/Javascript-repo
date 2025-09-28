const accountId='12345' //value never be changed in variable const....
let accountEmail="sajjansaklen@gmail.com"//value can be changed in variable let...
var accountPassword='4536'
accoutnCity='Karnataka'
let accountState; //It will show in table undefined if we not defined any value..
const district='belgavi';
var accountPassword='1111'

/* 
Prefer not use Var.Because of issue in block scope and funtional scope.....
 */


console.log(accountId); //printing for single statements
console.table([accountEmail,accountId,accoutnCity,accountState,district,accountPassword]);//printing for all statements in one table format..