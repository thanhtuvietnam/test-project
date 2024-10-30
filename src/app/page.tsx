import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Welcome to the Home Page</h1>
      <p>This is the content of the Home Page</p>
      <Link href="register">Register</Link>
    </>
  );
}
