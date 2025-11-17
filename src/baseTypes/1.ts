// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.
let age: number = 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined = undefined;

let callback = (a: number): number => {
  return 100 + a;
};

// TEST
console.log("Callback(50) =", callback(50));  // 150

export {};
