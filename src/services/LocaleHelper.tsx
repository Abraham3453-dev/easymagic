export const getLocalePrefix = () => {
  return new Promise((resolve, reject) => {
      if (global.localePrefix) {
          resolve(global.localePrefix)
      } else {
          resolve('en')
      }
  })
}