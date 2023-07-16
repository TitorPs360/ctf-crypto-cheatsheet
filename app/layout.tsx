'use client';

import './globals.css';
import { IBM_Plex_Sans } from 'next/font/google';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ibmPlexSans = IBM_Plex_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>
        <DndProvider backend={HTML5Backend}>{children}</DndProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </body>
    </html>
  );
}
