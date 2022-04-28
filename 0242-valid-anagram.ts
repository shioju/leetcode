function isAnagram(s: string, t: string): boolean {
  const counter = new Map();
  for (let c of s) {
    counter.set(c, (counter.get(c) || 0) + 1);
  }
  for (let c of t) {
    if ((counter.get(c) || 0) === 0) {
      return false;
    }
    counter.set(c, (counter.get(c) || 0) - 1);
  }
  for (const value of counter.values()) {
    if (value > 0) {
      return false;
    }
  }
  return true;
}
