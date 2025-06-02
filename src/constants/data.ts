import { NavItem } from '@/types';

export type Product = {
    photo_url: string;
    name: string;
    description: string;
    created_at: string;
    price: number;
    id: string;
    category: string;
    updated_at: string;
}

//  Info: the following data is used for the sidebar navigation and Cmd K bar.

export const navItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: 'dashboard',
        isActive: false,
        shortcut: ['d', 'd'],
        items: []
    },
    {
        title: 'Products',
        url: '/products',
        icon: 'product',
        isActive: false,
        shortcut: ['p', 'p'],
        items: []
    },
    {
        title: 'Account',
        url: '#', // Placeholder as there is no direct link for the parent
        icon: 'billing',
        isActive: true,

        items: [
            {
                title: 'Profile',
                url: '/dashboard/profile',
                icon: 'userPen',
                shortcut: ['m', 'm']
            },
            {
                title: 'Login',
                shortcut: ['l', 'l'],
                url: '/',
                icon: 'login'
            }
        ]
    },
    {
        title: 'Kanban',
        url: '/dashboard/kanban',
        icon: 'kanban',
        shortcut: ['k', 'k'],
        isActive: false,
        items: [] // No child items
    }

]