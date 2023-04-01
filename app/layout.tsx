import "./globals.css";

export const metadata = {
  title: "Open Table Clone",
  description: "Scheduling app for restaurants",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
