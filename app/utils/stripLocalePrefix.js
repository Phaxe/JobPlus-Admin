// utils/stripLocalePrefix.js
export function stripLocalePrefix(url) {
    const localePrefixes = ['/ar', '/en'];
  
    for (const prefix of localePrefixes) {
      if (url.includes(prefix)) {
        return url.replace(prefix, '');
      }
    }
  
    return url;
  }
  