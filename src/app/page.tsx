import { Button } from '@mui/base/Button';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Next.js app!</h1>
      <p>
        This is the default page. You can edit this file to start building your
        app.
      </p>
      <Button
        type="button"
        color="primary"
        className="bg-green-600 rounded-md py-1 px-4"
      >
        Get started
      </Button>
      <Stack spacing={2} direction="row">
        <Button>Button</Button>
        <Button disabled>Disabled</Button>
      </Stack>
    </main>
  );
}
