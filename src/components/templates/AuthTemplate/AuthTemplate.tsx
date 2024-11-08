import { BackgroundVid } from '@/components/atoms';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface AuthTemplateProps {
  children: React.ReactNode;
}
const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className={cn('not-prose min h-screen', 'relative')}>
      <BackgroundVid />
      <nav>
        <ul>
          <li>
            <Link href="/">go to homnepage</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default AuthTemplate;
