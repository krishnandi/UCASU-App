// src/app/(tabs)/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import {
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useAuth } from '@/context/auth-context';

type Announcement = {
  id: string;
  tag: 'Societies' | 'Campus' | 'Elections' | 'Support';
  title: string;
  summary: string;
  date: string;
  campus: 'All Campuses' | 'Farnham' | 'Epsom' | 'Canterbury';
  url?: string;
};

const CAMPUSES = ['All', 'Farnham', 'Epsom', 'Canterbury'] as const;

const ROLE_LABELS = {
  student: 'Student',
  president: 'Society President',
  staff: 'UCA Staff',
} as const;

const ANNOUNCEMENTS: Announcement[] = [
  {
    id: '1',
    tag: 'Societies',
    title: 'Society Registrations & Committee Sign-Ups Open',
    summary:
      'Browse active creative societies or register your committee details for the term via the Societies tab.',
    date: 'Today',
    campus: 'All Campuses',
    url: 'https://www.ucasu.com',
  },
  {
    id: '2',
    tag: 'Campus',
    title: 'Farnham Studio & SU Hub Evening Session',
    summary:
      'Drop by for cross-course meetups, project showcases, and student union updates.',
    date: 'Yesterday',
    campus: 'Farnham',
  },
  {
    id: '3',
    tag: 'Elections',
    title: 'Student Representation & Officer Updates',
    summary:
      'See how student representatives advocate for studio access, events, and campus support.',
    date: '2 days ago',
    campus: 'All Campuses',
    url: 'https://www.ucasu.com',
  },
  {
    id: '4',
    tag: 'Support',
    title: 'SU Advice & Student Support Drop-In',
    summary:
      'Confidential guidance on academic appeals, wellbeing resources, and student life.',
    date: 'This week',
    campus: 'All Campuses',
  },
];

export default function HomeScreen() {
  const { currentUser } = useAuth();
  const [selectedCampus, setSelectedCampus] = useState<(typeof CAMPUSES)[number]>('All');

  const firstName = currentUser.name.split(' ')[0];

  const visibleAnnouncements = useMemo(() => {
    if (selectedCampus === 'All') {
      return ANNOUNCEMENTS;
    }
    return ANNOUNCEMENTS.filter(
      (item) => item.campus === 'All Campuses' || item.campus === selectedCampus
    );
  }, [selectedCampus]);

  const handleOpenLink = async (url?: string) => {
    if (url) {
      await Linking.openURL(url);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.screen}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.eyebrow}>UCA STUDENTS&apos; UNION</Text>
            <Text style={styles.title}>Hi, {firstName}</Text>
          </View>
          <View style={styles.rolePill}>
            <Text style={styles.rolePillText}>{ROLE_LABELS[currentUser.role]}</Text>
          </View>
        </View>

        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Union Hub</Text>
          <Text style={styles.bannerBody}>
            Stay up to date with Students&apos; Union news, jump into Clubs &amp; Societies, or
            check upcoming campus events.
          </Text>
          <View style={styles.bannerActions}>
            <Pressable
              onPress={() => router.push('/(tabs)/clubs')}
              style={({ pressed }) => [styles.primaryBtn, pressed && styles.pressed]}
            >
              <Ionicons name="people" size={16} color="#11181C" />
              <Text style={styles.primaryBtnText}>Clubs &amp; Societies</Text>
            </Pressable>

            <Pressable
              onPress={() => router.push('/(tabs)/explore')}
              style={({ pressed }) => [styles.secondaryBtn, pressed && styles.pressed]}
            >
              <Ionicons name="sparkles-outline" size={16} color="#FFFFFF" />
              <Text style={styles.secondaryBtnText}>Explore</Text>
            </Pressable>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Announcements</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.campusRow}
        >
          {CAMPUSES.map((campus) => {
            const active = selectedCampus === campus;
            return (
              <Pressable
                key={campus}
                onPress={() => setSelectedCampus(campus)}
                style={[styles.campusChip, active && styles.campusChipActive]}
              >
                <Text style={[styles.campusChipText, active && styles.campusChipTextActive]}>
                  {campus}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.cardList}>
          {visibleAnnouncements.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => handleOpenLink(item.url)}
              style={({ pressed }) => [styles.card, pressed && item.url && styles.pressed]}
            >
              <View style={styles.cardTop}>
                <Text style={styles.tag}>{item.tag}</Text>
                <Text style={styles.meta}>
                  {item.campus} • {item.date}
                </Text>
              </View>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSummary}>{item.summary}</Text>
              {item.url && (
                <View style={styles.linkRow}>
                  <Text style={styles.linkText}>Open on UCASU</Text>
                  <Ionicons name="open-outline" size={14} color="#0A7AFF" />
                </View>
              )}
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  screen: {
    flex: 1,
  },
  content: {
    padding: 18,
    paddingTop: 20,
    paddingBottom: 36,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
    color: '#0D9488',
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginTop: 2,
  },
  rolePill: {
    backgroundColor: '#E2E8F0',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  rolePillText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#1E293B',
  },
  banner: {
    backgroundColor: '#111827',
    borderRadius: 18,
    padding: 18,
    marginBottom: 20,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 6,
  },
  bannerBody: {
    fontSize: 14,
    lineHeight: 20,
    color: '#CBD5E1',
    marginBottom: 16,
  },
  bannerActions: {
    flexDirection: 'row',
    gap: 10,
  },
  primaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#76C7C0',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 6,
  },
  primaryBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#11181C',
  },
  secondaryBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.14)',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    gap: 6,
  },
  secondaryBtnText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 10,
  },
  campusRow: {
    gap: 8,
    paddingBottom: 14,
  },
  campusChip: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  campusChipActive: {
    backgroundColor: '#0F172A',
    borderColor: '#0F172A',
  },
  campusChipText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  campusChipTextActive: {
    color: '#FFFFFF',
  },
  cardList: {
    gap: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 15,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  tag: {
    fontSize: 11,
    fontWeight: '700',
    color: '#0D9488',
    backgroundColor: '#F0FDFA',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  meta: {
    fontSize: 12,
    color: '#64748B',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  cardSummary: {
    fontSize: 14,
    lineHeight: 20,
    color: '#475569',
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 10,
  },
  linkText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0A7AFF',
  },
  pressed: {
    opacity: 0.85,
  },
});