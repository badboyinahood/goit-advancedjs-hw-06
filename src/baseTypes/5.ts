/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let id: string | number = 10;
let status: 'enable' | 'disable' = 'enable';

// TEST
console.log("ID =", id, "| Status =", status);

export {};