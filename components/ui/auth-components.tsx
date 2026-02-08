import { signIn, signOut } from '@/auth';

export function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github');
      }}
    >
      <button type="submit">Sign in with GitHub</button>
    </form>
  );
}

export function SignOut() {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}
