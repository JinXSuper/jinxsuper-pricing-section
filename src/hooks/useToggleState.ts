import { useState, useCallback, useEffect } from 'react';

export type TogglePeriod = 'yearly' | 'monthly' | 'weekly';

interface UseToggleStateOptions {
  defaultValue?: TogglePeriod;
  onChange?: (value: TogglePeriod) => void;
  persistToLocalStorage?: boolean;
  localStorageKey?: string;
}

export const useToggleState = (options: UseToggleStateOptions = {}) => {
  const {
    defaultValue = 'monthly',
    onChange,
    persistToLocalStorage = false,
    localStorageKey = 'toggle-state'
  } = options;

  const [state, setState] = useState<TogglePeriod>(() => {
    if (persistToLocalStorage && typeof window !== 'undefined') {
      const stored = localStorage.getItem(localStorageKey);
      if (stored === 'yearly' || stored === 'monthly' || stored === 'weekly') {
        return stored;
      }
    }
    return defaultValue;
  });

  const toggle = useCallback((value: TogglePeriod) => {
    setState(value);
    if (persistToLocalStorage && typeof window !== 'undefined') {
      localStorage.setItem(localStorageKey, value);
    }
    onChange?.(value);
  }, [onChange, persistToLocalStorage, localStorageKey]);

  return { state, toggle };
};
