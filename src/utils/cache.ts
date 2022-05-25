type LOCAL = 'localStorage'
type SESSION = 'sessionStorage'

type LocalType = LOCAL | SESSION

class LocalCache {
  setCache(key: string, value: any, locationType: LocalType) {
    window[locationType].setItem(key, JSON.stringify(value))
  }
  getCache(key: string, locationType: LocalType) {
    const value = window[locationType].getItem(key)

    return value ? JSON.parse(value) : value
  }
  deleteCache(key: string, locationType: LocalType) {
    window[locationType].removeItem(key)
  }
  clearCache(locationType: LocalType) {
    window[locationType].clear()
  }
}
export type { LocalType }
export default new LocalCache()
