class MyHashMap {
  haha: number[];
  constructor() {
    this.haha = [];
  }

  put(key: number, value: number): void {
    this.haha[key] = value;
  }

  get(key: number): number {
    return this.haha[key] !== undefined ? this.haha[key] : -1;
  }

  remove(key: number): void {
    delete this.haha[key];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
