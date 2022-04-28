function canConstruct(ransomNote: string, magazine: string): boolean {
  const counter = new Map();
  for (let c of magazine) {
    counter.set(c, (counter.get(c) || 0) + 1);
  }
  for (let c of ransomNote) {
    if ((counter.get(c) || 0) === 0) {
      return false;
    }
    counter.set(c, (counter.get(c) || 0) - 1);
  }
  return true;
}
