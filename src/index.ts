const button = document.getElementById('button');

button?.addEventListener('click', () => {
  button.innerText = 'holee-button';
});

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
