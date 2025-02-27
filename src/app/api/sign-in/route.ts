import { httpClient } from '@/services';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const jwt = request.headers.get('Authorization')?.split(' ')[1];

  try {
    const requestEndpoint = `API_ENDPOINTS`;

    const { data } = await httpClient.get(requestEndpoint, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!data) {
      return NextResponse.json([]);
    }

    return NextResponse.json([]);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
