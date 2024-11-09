'use client';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import styles from '@/routes/(auth)/auth.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <motion.form
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, x: -150 }}
      className={cn(styles.authBox, 'h-[500px] select-none')}
    >
      <div className={cn(styles.form)}>
        <Link href="/" className="absolute top-5">
          <icons.IoArrowBackCircleOutline size={40} />
        </Link>
        <div className={cn(styles.authHeader)}>
          <span className={cn(styles.headerSpan)}>Login</span>
        </div>

        <div className="mt-24">
          <div className={cn(styles.inputBox)}>
            <input
              id="email"
              type="email"
              className={cn(styles.inputField, 'mb-3')}
              required
              // placeholder="type your email..."
            />
            <label htmlFor="email" className={cn(styles.label)}>
              Email
            </label>
            <icons.MdOutlineEmail className={cn(styles.icon)} />
          </div>

          <div className={cn(styles.inputBox)}>
            <input
              id="pass"
              type="password"
              className={cn(styles.inputField)}
              required
            />
            <label htmlFor="password" className={cn(styles.label)}>
              Password
            </label>
            <icons.FaLock className={cn(styles.icon)} />
          </div>

          <div className={cn(styles.rememberForgor)}>
            <div>
              <input id="remember" type="checkbox" />
              <label className={cn()} htmlFor="remember">
                Remember Me
              </label>
            </div>

            <div className="forgot">
              <Link href="#">Forgot password?</Link>
            </div>
          </div>
          <button type="submit" className={cn(styles.submitBtn, 'my-5')}>
            Login
          </button>

          <div className={cn('-mt-2 flex items-center justify-center gap-2')}>
            <p>Don&apos;t have an account yet? </p>
            <Link href="/signup">
              <icons.IoArrowForwardCircleOutline size={40} />
            </Link>
          </div>
        </div>
      </div>
    </motion.form>
  );
};

export default LoginPage;
