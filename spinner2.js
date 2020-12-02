// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

const spin = ['|', '/', '-', '\\'];

const animate = setInterval(() => {
  for(let i = 0; i < spin.length; i++) {
    setTimeout (() => {
      process.stdout.write(`\r ${spin[i]}   `);
    }, 200 * i)
  }
}, 200 * spin.length);

setTimeout(() => {
  clearInterval(animate);
  process.stdout.write('\n');
}, 4000);