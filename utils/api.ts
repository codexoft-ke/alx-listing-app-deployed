// API utility functions
export const getApiBaseUrl = (): string => {
  // In production, use the environment variable or fallback to current origin
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }
  
  // Fallback for development or if env var is not set
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  
  // Default fallback (shouldn't happen in normal cases)
  return '';
};

export const getApiUrl = (endpoint: string): string => {
  const baseUrl = getApiBaseUrl();
  // Remove leading slash from endpoint if present to avoid double slashes
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  return `${baseUrl}/${cleanEndpoint}`;
};
