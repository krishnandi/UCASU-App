// src/app/(tabs)/_layout.tsx
import { Redirect } from 'expo-router';

import AppTabs from '@/components/app-tabs';
import { useAuth } from '@/context/auth-context';

export default function TabsLayout() {
  const { hasEnteredApp } = useAuth();

  if (!hasEnteredApp) {
    return <Redirect href="/login" />;
  }

  return <AppTabs />;
}