import readline from 'node:readline';

console.log("Loading Node.js terminal CLI Tetris block renderer...");
console.log("Controls: Left/Right arrows to slide, spacebar to rotate.");
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl && key.name === 'c') {
    process.exit();
  }
  console.log(`Input key pressed: ${key.name}`);
});
