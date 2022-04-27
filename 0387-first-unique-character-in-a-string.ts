function firstUniqChar(s: string): number {
  const counter = new Map();
  for (const c of s) {
    counter.set(c, (counter.get(c) || 0) + 1);
  }

  for (const [key, val] of counter) {
    if (val === 1) return s.indexOf(key);
  }
  return -1;
}
