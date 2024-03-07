import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Next.js app!</h1>
      <p>
        This is the default page. You can edit this file to start building your
        app.
      </p>
      <Box sx={{ m: 2 }}>
        <Link href="/another">
          <Button variant="contained">Contained</Button>
        </Link>
      </Box>
      <Button variant="text">Text</Button>
      <Button variant="outlined">Outlined</Button>
      <div className="flex w-full justify-center">
        <Button variant="contained">Contained</Button>
      </div>
    </main>
  );
}
