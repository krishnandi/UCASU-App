export type UserRole = 'student' | 'president' | 'staff';

export type DemoUser = {
  id: string;
  name: string;
  role: UserRole;
  societyId?: string;
};

export const DEMO_USERS: Record<UserRole, DemoUser> = {
  student: { id: 'u-1', name: 'Alex Student', role: 'student' },
  president: { id: 'u-2', name: 'Sam President', role: 'president', societyId: 'soc-1' },
  staff: { id: 'u-3', name: 'Jordan UCA Staff', role: 'staff' },
};

export async function loginWithDemoRole(role: UserRole): Promise<DemoUser> {
  // Swap this body later for Supabase/Firebase or MSL API auth
  return Promise.resolve(DEMO_USERS[role]);
}