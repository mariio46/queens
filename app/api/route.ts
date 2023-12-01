import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]/route';

export async function GET(request: NextRequest) {
    const session = await getServerSession(authOptions);
    console.log('Get Session', session);
    return NextResponse.json({ authenticated: !!session });
}
