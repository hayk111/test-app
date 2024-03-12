'use client';

import { counterState } from '../countAtom';
import { usePersistedRecoilState } from '../usePersistedRecoilState';

export default function Another() {
  const [counter] = usePersistedRecoilState(counterState);
  return (
    <main>
      <h1>Welcome to Another!</h1>
      <h4>Counter: {counter}</h4>
    </main>
  );
}
