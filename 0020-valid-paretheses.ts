function isValid(s: string): boolean {
  const stack = [];
  for (let c of s) {
    if (c === ")") {
      if (stack.pop() !== "(") return false;
    } else if (c === "]") {
      if (stack.pop() !== "[") return false;
    } else if (c === "}") {
      if (stack.pop() !== "{") return false;
    } else {
      stack.push(c);
    }
  }
  return stack.length === 0;
}
