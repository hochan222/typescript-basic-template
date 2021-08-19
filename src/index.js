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
