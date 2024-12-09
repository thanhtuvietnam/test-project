import { socialLinks } from '@/lib/declarations/constant';
import Link from 'next/link';

const SocialContact: React.FC = () => {
  return (
    <>
      <div className="custom-flex-1 border-themes justify-center gap-3 border-t p-4 md:hidden">
        {socialLinks.map((link) => (
          <Link
            key={link.id}
            target="_blank"
            href={link.path ?? '#'}
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-blue-700"
          >
            {link.icon && (
              <link.icon
                size={35}
                className="transition-colors duration-300 ease-in-out hover:text-red-500"
              />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SocialContact;
