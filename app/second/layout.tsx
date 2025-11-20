export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        <strong>/Second</strong>
        {children}
      </body>
    </html>
  );
}
