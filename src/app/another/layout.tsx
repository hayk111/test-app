export default function AnotherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h1>Another Layout</h1>
      {children}
    </div>
  );
}
