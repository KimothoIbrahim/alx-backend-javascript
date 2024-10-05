#!/usr/bin/env node
process.stdin.setEncoding('utf8');

process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    process.stdout.write(`Your name is: ${input}`);
  }
});

process.on('SIGINT', () => {
  console.log('\n\nThis important software is now closing');
  process.exit();
});
