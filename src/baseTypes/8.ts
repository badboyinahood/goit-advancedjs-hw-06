/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type Gender = 'male' | 'female';
const myGender: Gender = 'male';

// TEST
console.log("Gender:", myGender);

export {};