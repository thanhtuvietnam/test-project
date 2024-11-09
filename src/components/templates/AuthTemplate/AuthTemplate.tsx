import { BackgroundVid } from '@/components/atoms';
import { cn } from '@/lib/utils';
import styles from '@/routes/(auth)/auth.module.css';
import Link from 'next/link';

interface AuthTemplateProps {
  children: React.ReactNode;
}
const AuthTemplate: React.FC<AuthTemplateProps> = ({ children }) => {
  return (
    <div className={cn('not-prose', 'relative')}>
      <BackgroundVid />
      <nav className="absolute text-white">
        <ul>
          <li>
            <Link href="/">go to homnepage</Link>
          </li>
        </ul>
      </nav>
      <main className={cn(styles.wrapper)}>{children}</main>
    </div>
  );
};

export default AuthTemplate;
