// const button = document.getElementById('button');

// button?.addEventListener('click', () => {
//   button.innerText = 'holee-button';
// });

/*
 ** "allowUnreachableCode": false,
 */

// function fn(n: number) {
//   if (n > 5) {
//     return true;
//   } else {
//     return false;
//   }
//   return true;
// }

/*
 ** "allowUnusedLabels": false,
 */

// function verifyAge(age: number) {
//   // Forgot 'return' statement
//   if (age > 18) {
//     verified: true;
//   }
// }

/*
 ** "exactOptionalPropertyTypes": true,
 */

// interface UserDefaults {
//   color?: "dark" | "light";
// }

// const user: UserDefaults = {
//   color: undefined, // dark | light | undefined
// };

/*
 ** "noFallthroughCasesInSwitch": true,
 */

// const fallthrough = 6;

// switch (fallthrough) {
//   case 1:
//     // Fallthrough case in switch.ts(7029)
//     console.log(1);
//   case 2:
//     console.log(2);
//     break;
//   default:
//     break;
// }

/*
 ** "noImplicitAny": true,
 */

// const anyFunction = (num) => {
//   return num;
// };
// anyFunction(42);

/*
 ** "noImplicitOverride": true,
 */

// class weapon {
//   create() {}
//   attack() {}
// }

// class gun extends weapon {
//   // This member must have an 'override' modifier because it overrides a member in the base class 'weapon'.ts(4114)
//   create() {}

//   // overriding 키워드를 사용한 명시적 오버라이딩은 허용된다.
//   override attack() {}
// }

/*
 ** "noImplicitReturns": true,
 */

// Function lacks ending return statement and return type does not include 'undefined'.ts(2366)
// function lookupHeadphonesManufacturer(color: 'blue' | 'black'): string {
//   if (color === 'blue') {
//     return 'beats';
//   } else {
//     ('bose');
//   }
// }

/*
 ** "alwaysStrict": true,
 */

// const number = 023;

/*
 ** "noImplicitThis": true,
 */

// class Rectangle {
//   width: number;
//   height: number;

//   constructor(width: number, height: number) {
//     this.width = width;
//     this.height = height;
//   }

//   getAreaFunction() {
//     return function () {
//       //   'this' implicitly has type 'any' because it does not have a type annotation.ts(2683)
//       return this.width * this.height;
//     };
//   }
// }

/*
 ** "noPropertyAccessFromIndexSignature": true,
 */

// interface GameSettings {
//   // Known up-front properties
//   speed: 'fast' | 'medium' | 'slow';
//   quality: 'high' | 'low';

//   // Assume anything unknown to the interface
//   // is a string.
//   [key: string]: string;
// }

// const getSettings = (): GameSettings => {
//   return {
//     speed: 'fast',
//     quality: 'high',
//   };
// };

// const settings = getSettings();

// settings.speed; // 의도함
// settings.quality; // 의도함
// // Property 'user' comes from an index signature, so it must be accessed with ['user'].ts(4111)
// settings.user; // 의도한건가..?

// settings['user'];

/*
 ** "noUncheckedIndexedAccess": true,
 */

// interface EnvironmentVars {
//   NAME: string;
//   OS: string;

//   // Unknown properties are covered by this index signature.
//   [propName: string]: string;
// }

// declare const env: EnvironmentVars;

// // Declared as existing
// const sysName = env.NAME;
// const os = env.OS;

// const os: string;

// // Not declared, but because of the index
// // signature, then it is considered a string
// // nodeEnv = string | undefined
// const nodeEnv = env.NODE_ENV;

/*
 ** "noUnusedLocals": true,
 */

// const foo = () => {
//   // 'bar' is declared but its value is never read.ts(6133)
//   const bar = 42;
// };

/*
 ** "noUnusedParameters": true,
 */

// //  'modelID' is declared but its value is never read.ts(6133)
// const createDefaultKeyboard = (modelID: number) => {
//   const defaultModelID = 23;
//   return { type: 'keyboard', modelID: defaultModelID };
// };

/*
 ** "noUnusedParameters": true,
 */

// function fn(x: string) {
//   return parseInt(x, 10);
// }

// const n1 = fn.call(undefined, '10');

// // Argument of type 'boolean' is not assignable to parameter of type 'string'.ts(2345)
// const n2 = fn.call(undefined, false);

/*
 ** "strictFunctionTypes": true,
 */

// let foo: Array<string> = [];
// let bar: Array<string | number> = [];

// bar = foo;
// // Type '(string | number)[]' is not assignable to type 'string[]'.
// //   Type 'string | number' is not assignable to type 'string'.
// //     Type 'number' is not assignable to type 'string'.ts(2322)
// foo = bar;

/*
 ** "strictFunctionTypes": true,
 */

// declare const loggedInUsername: string;

// const users = [
//   { name: 'Oby', age: 12 },
//   { name: 'Heera', age: 32 },
// ];

// const loggedInUser = users.find((u) => u.name === loggedInUsername);
// // Object is possibly 'undefined'.ts(2532)
// console.log(loggedInUser.age);

/*
 ** "strictPropertyInitialization": true,
 */

// class UserAccount {
//   name: string;
//   accountType = 'user';

//   //   Property 'email' has no initializer and is not definitely assigned in the constructor.ts(2564)
//   email: string;
//   address: string | undefined;

//   constructor(name: string) {
//     this.name = name;
//     // Note that this.email is not set
//   }
// }
