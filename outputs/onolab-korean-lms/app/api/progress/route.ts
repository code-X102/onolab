import { NextResponse } from 'next/server';
export async function GET() { return NextResponse.json({ message: 'Connect Supabase to read student progress.' }, { status: 503 }); }
export async function POST() { return NextResponse.json({ message: 'Connect Supabase to save student progress.' }, { status: 503 }); }
