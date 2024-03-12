'use client';

import { useRecoilState } from 'recoil';
import { counterState } from '../countAtom';

export default function Another() {
  const [counter] = useRecoilState(counterState);
  return (
    <main>
      <h1>Welcome to Another!</h1>
      <h4>Counter: {counter}</h4>
    </main>
  );
}
