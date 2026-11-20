import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'Onolab — Korean, written your way', description:'A Korean writing-first learning studio for every learner.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
