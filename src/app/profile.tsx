// src/app/profile.tsx
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useAuth } from '@/context/auth-context';
import type { UserRole } from '@/data/auth';

const ROLES: { role: UserRole; label: string }[] = [
  { role: 'student', label: 'Student' },
  { role: 'president', label: 'Society President' },
  { role: 'staff', label: 'UCA Staff' },
];

export default function ProfileScreen() {
  const { currentUser, loginAs } = useAuth();
  const [isSwitching, setIsSwitching] = useState(false);

  const handleSelectRole = async (role: UserRole) => {
    setIsSwitching(true);
    try {
      await loginAs(role);
    } finally {
      setIsSwitching(false);
    }
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Profile & Demo Login</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Signed in as</Text>
        <Text style={styles.name}>{currentUser.name}</Text>
        <Text style={styles.meta}>Role: {currentUser.role}</Text>
        <Text style={styles.meta}>ID: {currentUser.id}</Text>
        {currentUser.societyId && (
          <Text style={styles.meta}>Society ID: {currentUser.societyId}</Text>
        )}
      </View>

      <Text style={styles.sectionTitle}>Switch Demo Account</Text>
      <View style={styles.buttonGroup}>
        {ROLES.map(({ role, label }) => {
          const active = currentUser.role === role;
          return (
            <Pressable
              key={role}
              disabled={isSwitching}
              onPress={() => handleSelectRole(role)}
              style={[styles.roleButton, active && styles.roleButtonActive]}
            >
              <Text style={[styles.roleButtonText, active && styles.roleButtonTextActive]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    marginBottom: 24,
  },
  label: {
    fontSize: 12,
    fontWeight: '600',
    color: '#555555',
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 6,
  },
  meta: {
    fontSize: 14,
    color: '#222222',
    marginTop: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 10,
  },
  buttonGroup: {
    gap: 10,
  },
  roleButton: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  roleButtonActive: {
    backgroundColor: '#000000',
  },
  roleButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  roleButtonTextActive: {
    color: '#ffffff',
  },
});