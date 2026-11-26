// src/app/login.tsx
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { useAuth } from '@/context/auth-context';
import type { UserRole } from '@/data/auth';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const ROLE_PRESETS: { role: UserRole; label: string; email: string }[] = [
  { role: 'student', label: 'Student', email: 'alex.student@students.uca.ac.uk' },
  { role: 'president', label: 'Society President', email: 'sam.pres@students.uca.ac.uk' },
  { role: 'staff', label: 'UCA Staff', email: 'jordan.staff@uca.ac.uk' },
];

const BACKGROUND_IMAGE = require('../../assets/images/background.jpg');

export default function LoginScreen() {
  const { currentUser, loginAs, enterApp } = useAuth();
  const [email, setEmail] = useState(ROLE_PRESETS[0].email);
  const [password, setPassword] = useState('••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);

  const handleSelectRole = async (role: UserRole, presetEmail: string) => {
    setEmail(presetEmail);
    setPassword('••••••••');
    await loginAs(role);
  };

  const handleLogin = async () => {
    setBusy(true);
    try {
      await enterApp(currentUser.role);
      router.replace('/(tabs)');
    } finally {
      setBusy(false);
    }
  };

  return (
    <View style={styles.screen}>
      {/* Centered background image — tweak translateX if you want more left/right shift */}
      <Image
        source={BACKGROUND_IMAGE}
        resizeMode="cover"
        style={styles.backgroundImage}
      />

      <View style={styles.darkOverlay} />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <BlurView intensity={55} tint="dark" style={styles.glassCard}>
          {/* UCA Students' Union Header */}
          <View style={styles.brandRow}>
            <View style={styles.logoBadge}>
              <Text style={styles.logoLetter}>U</Text>
            </View>
            <View style={styles.brandTextGroup}>
              <Text style={styles.brandTitle}>STUDENTS&apos; UNION</Text>
              <Text style={styles.brandSubtitle}>UNIVERSITY FOR THE CREATIVE ARTS</Text>
            </View>
          </View>

          <Text style={styles.heading}>Log in</Text>

          {/* Role Selector Pills (Student / President / UCA Staff) */}
          <View style={styles.roleRow}>
            {ROLE_PRESETS.map((item) => {
              const active = currentUser.role === item.role;
              return (
                <Pressable
                  key={item.role}
                  onPress={() => handleSelectRole(item.role, item.email)}
                  style={[styles.rolePill, active && styles.rolePillActive]}
                >
                  <Text style={[styles.rolePillText, active && styles.rolePillTextActive]}>
                    {item.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Username / Email Input */}
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="rgba(255, 255, 255, 0.55)"
            autoCapitalize="none"
            keyboardType="email-address"
            style={styles.input}
          />

          {/* Password Input with Visibility Toggle */}
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.passwordWrapper}>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="rgba(255, 255, 255, 0.55)"
              secureTextEntry={!showPassword}
              style={styles.passwordInput}
            />
            <Pressable
              onPress={() => setShowPassword((prev) => !prev)}
              hitSlop={8}
              style={styles.eyeButton}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="rgba(255, 255, 255, 0.65)"
              />
            </Pressable>
          </View>

          {/* Primary Blue Log in Button */}
          <Pressable
            disabled={busy}
            onPress={handleLogin}
            style={({ pressed }) => [styles.loginButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.loginButtonText}>
              {busy ? 'Signing in...' : `Log in`}
            </Text>
          </Pressable>

          <Pressable onPress={() => {}} style={styles.forgotWrapper}>
            <Text style={styles.forgotText}>Forgot password?</Text>
          </Pressable>

          {/* Secondary Create Account Button */}
          <Pressable
            disabled={busy}
            onPress={handleLogin}
            style={({ pressed }) => [styles.secondaryButton, pressed && styles.buttonPressed]}
          >
            <Text style={styles.secondaryButtonText}>Create Account</Text>
          </Pressable>
        </BlurView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    overflow: 'hidden',
  },
  backgroundImage: {
    position: 'absolute',
    width: SCREEN_WIDTH * 1.6,
    height: SCREEN_HEIGHT,
    left: -(SCREEN_WIDTH * 0.3),
    top: 0,
  },
  darkOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(10, 12, 16, 0.45)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
  },
  glassCard: {
    borderRadius: 24,
    padding: 22,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.22)',
    backgroundColor: 'rgba(35, 38, 45, 0.45)',
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  logoBadge: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#76C7C0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoLetter: {
    fontSize: 20,
    fontWeight: '800',
    color: '#182226',
  },
  brandTextGroup: {
    flexShrink: 1,
  },
  brandTitle: {
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: '#76C7C0',
  },
  brandSubtitle: {
    fontSize: 8.5,
    fontWeight: '600',
    letterSpacing: 0.6,
    color: 'rgba(255, 255, 255, 0.85)',
    marginTop: 1,
  },
  heading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 14,
  },
  roleRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 16,
  },
  rolePill: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  rolePillActive: {
    backgroundColor: '#76C7C0',
    borderColor: '#76C7C0',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  rolePillText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.85)',
    textAlign: 'center',
  },
  rolePillTextActive: {
    color: '#11181C',
    fontWeight: '700',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    color: '#ffffff',
    fontSize: 14,
    marginBottom: 14,
  },
  passwordWrapper: {
    height: 44,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 18,
  },
  passwordInput: {
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
  },
  eyeButton: {
    paddingLeft: 8,
  },
  loginButton: {
    height: 46,
    borderRadius: 8,
    backgroundColor: '#0A7AFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#ffffff',
  },
  forgotWrapper: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 14,
  },
  forgotText: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  secondaryButton: {
    height: 44,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.24)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
  buttonPressed: {
    opacity: 0.85,
  },
});