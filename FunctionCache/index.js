function cache(func) {
    const cacheStore = new Map();
    
    return (...args) => {
      const key = JSON.stringify(args);
      
      if (cacheStore.has(key)) {
        return cacheStore.get(key);
      }
      
      const result = func(...args);
      cacheStore.set(key, result);
      return result
      }
  }