import { Avatar, LoginBtn } from '@/components/atoms';

const UserLogin: React.FC = () => {
  const login = false;

  return (
    <div className="userLogin">
      {login ? (
        <Avatar />
      ) : (
        <LoginBtn
          borderRadius="1.75rem"
          className="border-main-summerSky-600 bg-main-summerSky-450 text-bgdark dark:border-slate-800 dark:bg-main-darkGreen-700 dark:text-bglight"
        >
          Login
        </LoginBtn>
      )}
    </div>
  );
};

export default UserLogin;
