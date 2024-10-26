import Link from 'next/link';

const RegisterPage: React.FC = () => {
  return (
    <>
      <h1>This is a Register Page</h1>
      <Link href="login">login</Link>
    </>
  );
};

export default RegisterPage;
