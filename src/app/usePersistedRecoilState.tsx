import { useEffect } from 'react';
import { useRecoilState, RecoilState, SetterOrUpdater } from 'recoil';

export function usePersistedRecoilState<T>(
  atom: RecoilState<T>
): [any, SetterOrUpdater<T>] {
  const [state, setState] = useRecoilState(atom);
  console.log('🚀 ~ state:', state);

  // Load state from local storage when the component mounts
  useEffect(() => {
    const savedState = window.localStorage.getItem(atom.key);
    if (savedState) {
      setState(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(atom.key, JSON.stringify(state));
  }, [atom.key, state]);

  return [state, setState];
}
