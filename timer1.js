
setTimeout(() => {
  if (process.argv[2] === '') {
    return;
  } if (process.argv[2] < 0) {
    return;
  } if (isNaN(process.argv[2]) === true) {
    return;
  }  else {
    process.stdout.write('\x07');
  }
}, process.argv[2] * 1000);

