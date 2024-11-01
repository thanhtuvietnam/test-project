'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const SidebarVariants = {
  exit: { opacity: 0, x: -100 },
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const Sidebar: React.FC = () => {
  return (
    <motion.ul
      exit="exit"
      initial="hidden"
      animate="visible"
      variants={SidebarVariants}
      className={cn(
        'not-prose fixed left-0 h-screen w-96 rounded-xl bg-black text-white',
        ''
      )}
    >
      <div>Sidebar</div>
    </motion.ul>
  );
};

export default Sidebar;
