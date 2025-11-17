/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  console.log("Message:", message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// TESTS
showMessage("Hello!");
console.log("Calc(5, 7) =", calc(5, 7)); // 12
// customError(); // не запускаємо

export {};
