import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await addDoc(collection(db, 'waitlist'), data);
    return NextResponse.json({ message: 'Successfully joined the waitlist!' });
  } catch (error) {
    console.error('Error in waitlist API:', error);
    return NextResponse.json({ message: 'Error joining the waitlist.' }, { status: 500 });
  }
}
