'use client';

import KBar from '@/components/kbar';
import Header from '@/components/layout/header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { useAuth } from '@/lib/auth-context';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({
    children
}: {
    children: React.ReactNode;
}) {
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && !user) {
            redirect('/auth/sign-in');
        }
    }, [user, isLoading]);

    if (isLoading || !user) {
        return null;
    }

    return (
        <>
            <Header />
            {children}
        </>
    );
}