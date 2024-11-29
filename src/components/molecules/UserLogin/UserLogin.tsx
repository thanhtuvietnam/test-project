import { Avatar, LoginBtn } from '@/components/atoms';
import { cn } from '@/lib/utils';

const UserLogin: React.FC = () => {
  // const login = true;
  const login = false;

  return (
    <>
      {login ? (
        <Avatar />
      ) : (
        <LoginBtn
          borderRadius="1.75rem"
          className={cn(
            'border-main-summerSky-600 bg-main-summerSky-450 text-bgdark dark:border-slate-800 dark:bg-main-darkGreen-700 dark:text-bglight',
            'bounce-effect font-mono'
          )}
        >
          Login
        </LoginBtn>
      )}
    </>
  );
};

export default UserLogin;
