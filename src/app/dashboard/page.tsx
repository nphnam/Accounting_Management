'use client';

import { useAuth } from '@/lib/auth-context';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Dashboard() {
  const { user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && !user) {
      redirect('/auth/sign-in');
    } else if (!isLoading && user) {
      redirect('/dashboard/overview');
    }
  }, [user, isLoading]);

  return null;
}
