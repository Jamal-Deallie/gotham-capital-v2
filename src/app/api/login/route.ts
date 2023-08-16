import clientPromise from '@/_lib/mongodb';
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/app/_auth/lucia';
import { cookies } from 'next/headers';
import { LuciaError } from 'lucia';

export async function POST(req: NextRequest): Promise<Response> {
  const formData = await req.formData();

  const username = formData.get('username');
  const password = formData.get('password');

  // basic check
  if (
    typeof username !== 'string' ||
    username.length < 1 ||
    username.length > 31
  ) {
    return NextResponse.json(
      {
        error: 'Invalid username',
      },
      {
        status: 400,
      }
    );
  }
  if (
    typeof password !== 'string' ||
    password.length < 1 ||
    password.length > 255
  ) {
    return NextResponse.json(
      {
        error: 'Invalid password',
      },
      {
        status: 400,
      }
    );
  }
  try {
    // `await clientPromise` will use the default database passed in the MONGODB_URI
    // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
    //
    // `const client = await clientPromise`
    // `const db = client.db("myDatabase")`
    //
    // Then you can execute queries against your database like so:
    // db.find({}) or any of the MongoDB Node Driver commands

    // const client = await clientPromise;
    // const db = client.db('gotham-capital');

    // find user by key
    // and validate password
    const key = await auth.useKey('username', username.toLowerCase(), password);
    console.log(key);
    const session = await auth.createSession({
      userId: key.userId,
      attributes: { username: key.providerUserId },
    });
    const authRequest = auth.handleRequest({
      req,
      //@ts-ignore
      cookies,
    });

    authRequest.setSession(session);
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/', // redirect to profile page
      },
    });
  } catch (e) {
    console.log(e);
    if (
      e instanceof LuciaError &&
      (e.message === 'AUTH_INVALID_KEY_ID' ||
        e.message === 'AUTH_INVALID_PASSWORD')
    ) {
      // user does not exist
      // or invalid password
      return NextResponse.json(
        {
          error: 'Incorrect username or password',
        },
        {
          status: 400,
        }
      );
    }
    return NextResponse.json(
      {
        error: 'An unknown error occurred',
      },
      {
        status: 500,
      }
    );
  }
}
