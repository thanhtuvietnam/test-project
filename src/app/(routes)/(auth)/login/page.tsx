'use client';
import { icons } from '@/lib/declarations/icons';
import { cn } from '@/lib/utils';
import styles from '@/routes/(auth)/auth.module.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const LoginPage: React.FC = () => {
  return (
    <motion.form
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0, y: -150 }}
      className={cn(styles.authBox, 'select-none')}
    >
      <div className={cn(styles.form)}>
        <div className={cn(styles.authHeader)}>
          <span className={cn(styles.headerSpan)}>Login</span>
        </div>

        <div className="mt-24">
          <div className={cn(styles.inputBox)}>
            <input
              id="user"
              type="text"
              className={cn(styles.inputField, 'mb-3')}
              required
            />
            <label htmlFor="user" className={cn(styles.label)}>
              UserName
            </label>
            <icons.FaUserSecret className={cn(styles.icon)} />
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

          <Link href="/register">register</Link>
        </div>
      </div>
    </motion.form>
  );
};

export default LoginPage;
