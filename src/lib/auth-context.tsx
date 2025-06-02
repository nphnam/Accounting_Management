'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface User {
  id: string;
  email: string;
  fullName: string;
  avatarUrl?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data
const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'demo@example.com',
    fullName: 'Demo User',
    avatarUrl: 'https://avatars.githubusercontent.com/u/1234567?v=4'
  }
];

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const signIn = async (email: string, password: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const mockUser = MOCK_USERS.find((u) => u.email === email);
    if (!mockUser) {
      throw new Error('Invalid credentials');
    }

    // In a real app, you would validate the password here
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signUp = async (email: string, password: string, fullName: string) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Check if user already exists
    if (MOCK_USERS.some((u) => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: String(MOCK_USERS.length + 1),
      email,
      fullName,
      avatarUrl: `https://api.dicebear.com/7.x/avatars/svg?seed=${email}`
    };

    MOCK_USERS.push(newUser);
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const signOut = async () => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 