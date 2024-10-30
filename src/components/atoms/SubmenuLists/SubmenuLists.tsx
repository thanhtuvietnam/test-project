import { cn } from '@/lib/utils';
import Link from 'next/link';

interface SubmenuListsProps {
  subMenus: {
    [key: string]: string[];
  };
  tab: string;
  openSubmenu: string | null;
}
const SubmenuLists: React.FC<SubmenuListsProps> = ({
  openSubmenu,
  subMenus,
  tab,
}) => {
  return (
    <>
      {subMenus[tab] && (
        <ul
          className={cn(
            'absolute top-16 grid w-96 grid-cols-3 rounded-md bg-gray-600 text-center',
            openSubmenu === tab ? 'grid' : 'hidden'
          )}
        >
          {subMenus[tab].map((subMenu, subIndex) => (
            <li
              key={subIndex}
              className={cn('select-none border-2 border-r-violet-900 py-3')}
            >
              <Link className="py-5" href="/register">
                {subMenu}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default SubmenuLists;
