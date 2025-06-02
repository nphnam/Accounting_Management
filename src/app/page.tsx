'use client';

import { useAuth } from '@/lib/auth-context';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      redirect('/auth/sign-in');
    } else {
      redirect('/dashboard/overview');
    }
  }, [user]);

  return null;
}
