// src/context/auth-context.tsx
import { DEMO_USERS, loginWithDemoRole, type DemoUser, type UserRole } from '@/data/auth';
import { createContext, useContext, useState, type ReactNode } from 'react';

type AuthContextValue = {
  currentUser: DemoUser;
  hasEnteredApp: boolean;
  loginAs: (role: UserRole) => Promise<void>;
  enterApp: (role?: UserRole) => Promise<void>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue>({
  currentUser: DEMO_USERS.student,
  hasEnteredApp: false,
  loginAs: async () => {},
  enterApp: async () => {},
  signOut: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<DemoUser>(DEMO_USERS.student);
  const [hasEnteredApp, setHasEnteredApp] = useState<boolean>(false);

  const loginAs = async (role: UserRole) => {
    const user = await loginWithDemoRole(role);
    setCurrentUser(user);
  };

  const enterApp = async (role?: UserRole) => {
    if (role) {
      await loginAs(role);
    }
    setHasEnteredApp(true);
  };

  const signOut = () => {
    setHasEnteredApp(false);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, hasEnteredApp, loginAs, enterApp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);