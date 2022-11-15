class LocalCache {
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key);
    if (value && value !== 'undefined') {
      return JSON.parse(value);
    }
  }

  deleteCache(key: string) {
    window.localStorage.removeItem(key);
  }

  clearLocal() {
    window.localStorage.clear();
  }
}

const LocalStorageCache = new LocalCache();

export default LocalStorageCache;
