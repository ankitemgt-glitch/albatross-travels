import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gray-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
