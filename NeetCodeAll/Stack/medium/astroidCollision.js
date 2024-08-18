var astroidCollision = (asteroids) => {
  let stack = [];
  for (let a of asteroids) {
    // a moving to left and the last element on stack moving to right
    while (stack.length && a < 0 && stack[stack.length - 1] > 0) {
      let diff = a + stack[stack.length - 1];
      if (diff < 0) {
        stack.pop();
      } else if (diff > 0) {
        a = 0;
      } else {
        a = 0;
        stack.pop();
      }
    }
    if (a) {
      stack.push(a);
    }
  }
  return stack;
};
