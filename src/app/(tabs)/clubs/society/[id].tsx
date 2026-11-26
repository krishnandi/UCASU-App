import { SOCIETIES } from '@/data/societies';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';

export default function SocietyDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [reminders, setReminders] = useState(true);

  const society = SOCIETIES.find((s) => s.id === id);

  if (!society) {
    return (
      <View style={styles.centered}>
        <Text>Society not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      {/* Top Teal SU Header */}
      <View style={styles.topHeader}>
        <View style={styles.suBadge}>
          <Text style={styles.suText}>SU</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Hero Banner */}
        <View style={[styles.hero, { backgroundColor: society.bg }]}>
          <Image
            source={society.image}
            style={styles.heroImage}
            resizeMode="contain"
          />

          {/* Top Floating Controls */}
          <View style={styles.heroControls}>
            <Pressable onPress={() => router.back()} style={styles.circleBtn}>
              <Ionicons name="chevron-back" size={20} color="#111" />
            </Pressable>
            <Pressable
              onPress={() => setSaved((prev) => !prev)}
              style={styles.circleBtn}
            >
              <Ionicons
                name={saved ? 'heart' : 'heart-outline'}
                size={20}
                color="#26B5A8"
              />
            </Pressable>
          </View>

          {/* Bottom Title + Campus Pill Overlay */}
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>{society.name}</Text>
            <View style={styles.campusPill}>
              <Text style={styles.campusText}>{society.campus} campus</Text>
            </View>
          </View>
        </View>

        {/* Body Content */}
        <View style={styles.body}>
          {/* Price + Join Button Row */}
          <View style={styles.priceRow}>
            <View>
              <Text style={styles.price}>
                {society.price === 0 ? 'Free' : `£${society.price.toFixed(2)}`}
              </Text>
              <Text style={styles.priceSub}>Membership · per year</Text>
            </View>
            <Pressable style={styles.joinBtn}>
              <Text style={styles.joinBtnText}>Join society</Text>
            </Pressable>
          </View>

          {/* About */}
          <Text style={styles.sectionHeading}>About</Text>
          <Text style={styles.aboutText}>{society.about}</Text>

          {/* Upcoming Events */}
          <Text style={styles.sectionHeading}>Upcoming events</Text>
          {society.events.length === 0 ? (
            <View style={styles.emptyEvents}>
              <Text style={styles.emptyTitle}>No events posted yet</Text>
              <Text style={styles.emptySub}>
                We&apos;ll let you know as soon as one is added
              </Text>
            </View>
          ) : (
            society.events.map((ev) => (
              <Pressable key={ev.id} style={styles.eventRow}>
                <Image
                  source={ev.image ?? society.image}
                  style={styles.eventThumb}
                  resizeMode="cover"
                />
                <View style={{ flex: 1 }}>
                  <Text style={styles.eventTitle}>{ev.title}</Text>
                  <Text style={styles.eventMeta}>{ev.dateLocation}</Text>
                </View>
                <Ionicons name="chevron-forward" size={18} color="#888" />
              </Pressable>
            ))
          )}

          {/* Event Reminders Card */}
          <View style={styles.reminderCard}>
            <View style={{ flex: 1, paddingRight: 12 }}>
              <Text style={styles.reminderTitle}>Event reminders</Text>
              <Text style={styles.reminderSub}>
                Get notified before this society&apos;s events
              </Text>
            </View>
            <Switch
              value={reminders}
              onValueChange={setReminders}
              trackColor={{ false: '#D1D5DB', true: '#26B5A8' }}
              thumbColor="#fff"
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#fff' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  topHeader: {
    backgroundColor: '#3EC1B3',
    paddingTop: 52,
    paddingBottom: 12,
    paddingHorizontal: 16,
  },
  suBadge: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suText: { color: '#3EC1B3', fontWeight: '800', fontSize: 13 },
  scrollContent: { paddingBottom: 40 },
  hero: {
    height: 210,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  heroImage: { width: '85%', height: '85%' },
  heroControls: {
    position: 'absolute',
    top: 14,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 2,
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.42)',
  },
  heroTitle: { color: '#fff', fontSize: 20, fontWeight: '700', marginBottom: 6 },
  campusPill: {
    alignSelf: 'flex-start',
    backgroundColor: '#26B5A8',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  campusText: { color: '#fff', fontSize: 11, fontWeight: '600' },
  body: { padding: 18 },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  price: { fontSize: 20, fontWeight: '800', color: '#111' },
  priceSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  joinBtn: {
    backgroundColor: '#26B5A8',
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 22,
  },
  joinBtnText: { color: '#fff', fontWeight: '700', fontSize: 14 },
  sectionHeading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
    marginTop: 8,
    marginBottom: 8,
  },
  aboutText: { fontSize: 13.5, lineHeight: 20, color: '#4B5563', marginBottom: 16 },
  emptyEvents: { paddingVertical: 6, marginBottom: 16 },
  emptyTitle: { fontSize: 13.5, fontWeight: '600', color: '#374151' },
  emptySub: { fontSize: 12, color: '#9CA3AF', marginTop: 2 },
  eventRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    marginBottom: 12,
  },
  eventThumb: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#1F2937',
  },
  eventTitle: { fontSize: 14, fontWeight: '700', color: '#111' },
  eventMeta: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  reminderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    padding: 14,
    marginTop: 6,
  },
  reminderTitle: { fontSize: 14, fontWeight: '700', color: '#111' },
  reminderSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
});

