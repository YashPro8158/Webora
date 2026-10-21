import { useEffect } from 'react';

/**
 * Lightweight hash router. Renders a different "page" based on `location.hash`.
 * e.g. /#/demos/interiors  ->  route = "/demos/interiors"
 */
export function useHashRoute(callback: (route: string) => void) {
  useEffect(() => {
    const handle = () => callback(window.location.hash.replace(/^#/, '') || '/');
    handle();
    window.addEventListener('hashchange', handle);
    return () => window.removeEventListener('hashchange', handle);
  }, [callback]);
}

export function navigate(route: string) {
  window.location.hash = route;
  window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
}

export function currentRoute(): string {
  return window.location.hash.replace(/^#/, '') || '/';
}
