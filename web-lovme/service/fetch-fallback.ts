// Fallback fetch implementation using XMLHttpRequest to bypass extension interference
export function fetchWithXHR(url: string, options: RequestInit = {}): Promise<Response> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    const method = options.method || 'GET'
    
    xhr.open(method, url, true)
    
    // Set headers
    if (options.headers) {
      const headers = options.headers instanceof Headers 
        ? options.headers 
        : new Headers(options.headers as HeadersInit)
      
      headers.forEach((value, key) => {
        xhr.setRequestHeader(key, value)
      })
    }
    
    // Set credentials
    if (options.credentials === 'include') {
      xhr.withCredentials = true
    }
    
    xhr.onload = () => {
      const headers = new Headers()
      const headerStr = xhr.getAllResponseHeaders()
      const headerPairs = headerStr.trim().split('\n')
      
      headerPairs.forEach(pair => {
        const [key, value] = pair.split(': ')
        if (key && value) {
          headers.append(key, value)
        }
      })
      
      const response = new Response(xhr.responseText, {
        status: xhr.status,
        statusText: xhr.statusText,
        headers,
      })
      
      resolve(response)
    }
    
    xhr.onerror = () => {
      reject(new Error('Network request failed'))
    }
    
    xhr.ontimeout = () => {
      reject(new Error('Request timeout'))
    }
    
    // Send request
    if (options.body) {
      if (typeof options.body === 'string' || options.body instanceof FormData) {
        xhr.send(options.body)
      } else {
        xhr.send(JSON.stringify(options.body))
      }
    } else {
      xhr.send()
    }
  })
}

// Extension detection and automatic fallback
export function safeFetch(resource: RequestInfo | URL, options?: RequestInit): Promise<Response> {
  // Check if fetch is modified by extension
  const isExtensionInterfering = () => {
    try {
      // Check if fetch has been wrapped
      return window.fetch.toString().includes('chrome-extension') ||
             window.fetch.toString() !== 'function fetch() { [native code] }'
    } catch {
      return false
    }
  }
  
  if (isExtensionInterfering() && typeof resource === 'string') {
    console.warn('Extension interference detected, using XHR fallback')
    return fetchWithXHR(resource, options)
  }
  
  return window.fetch(resource, options)
}