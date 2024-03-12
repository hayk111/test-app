'use client';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Link from 'next/link';
import { useRecoilState } from 'recoil';
import { counterState } from './countAtom';
import { usePersistedRecoilState } from './usePersistedRecoilState';

export default function Home() {
  const [counter, setCounter] = usePersistedRecoilState(counterState);
  return (
    <main>
      <h1>Welcome to the Next.js app!</h1>
      <p>
        This is the default page. You can edit this file to start building your
        app.
      </p>
      <Box sx={{ m: 2 }}>
        <Link href="/another">
          <Button variant="contained">Another Page</Button>
        </Link>
      </Box>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <div className="flex w-full justify-center">
        <Button
          variant="contained"
          onClick={() => setCounter((counter: number) => counter + 1)}
        >
          Increment Counter
        </Button>
        <h4>
          Counter: <span>{counter}</span>
        </h4>
      </div>
    </main>
  );
}
