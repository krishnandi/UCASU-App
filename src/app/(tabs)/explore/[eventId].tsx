import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { CAMPUS_EVENTS } from '@/data/events';

export default function EventDetailScreen() {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();
  const router = useRouter();
  const [saved, setSaved] = useState(false);
  const [rsvped, setRsvped] = useState(false);

  const event = CAMPUS_EVENTS.find((e) => e.id === eventId);

  if (!event) {
    return (
      <View style={styles.centered}>
        <Text style={styles.notFoundText}>Event not found.</Text>
        <Pressable onPress={() => router.back()} style={styles.fallbackBtn}>
          <Text style={styles.fallbackBtnText}>Go back</Text>
        </Pressable>
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

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Hero Image Banner */}
        <View style={styles.hero}>
          <Image source={event.image} style={styles.heroImage} resizeMode="cover" />

          <View style={styles.heroControls}>
            <Pressable onPress={() => router.back()} style={styles.circleBtn}>
              <Ionicons name="chevron-back" size={20} color="#111" />
            </Pressable>
            <Pressable onPress={() => setSaved((prev) => !prev)} style={styles.circleBtn}>
              <Ionicons
                name={saved ? 'bookmark' : 'bookmark-outline'}
                size={20}
                color="#26B5A8"
              />
            </Pressable>
          </View>

          <View style={styles.heroOverlay}>
            <View style={styles.pillRow}>
              <View style={styles.campusPill}>
                <Text style={styles.campusText}>{event.campus} campus</Text>
              </View>
              <View style={styles.categoryPill}>
                <Text style={styles.categoryText}>{event.category}</Text>
              </View>
            </View>
            <Text style={styles.heroTitle}>{event.title}</Text>
            <Text style={styles.heroHost}>Hosted by {event.hostName}</Text>
          </View>
        </View>

        {/* Body Content */}
        <View style={styles.body}>
          {/* Price + Ticket/RSVP Row */}
          <View style={styles.priceRow}>
            <View>
              <Text style={styles.price}>
                {event.price === 0 ? 'Free' : `£${event.price.toFixed(2)}`}
              </Text>
              <Text style={styles.priceSub}>
                {event.price === 0 ? 'Open entry · RSVP required' : 'Student ticket'}
              </Text>
            </View>
            <Pressable
              onPress={() => setRsvped((prev) => !prev)}
              style={[styles.rsvpBtn, rsvped && styles.rsvpBtnActive]}
            >
              <Text style={styles.rsvpBtnText}>
                {rsvped ? 'Going ✓' : event.price === 0 ? 'RSVP now' : 'Get ticket'}
              </Text>
            </Pressable>
          </View>

          {/* Date & Venue Info Box */}
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <Ionicons name="calendar-outline" size={18} color="#26B5A8" />
              <Text style={styles.infoText}>{event.dateLabel}</Text>
            </View>
            <View style={styles.infoRow}>
              <Ionicons name="location-outline" size={18} color="#26B5A8" />
              <Text style={styles.infoText}>
                {event.venue} · {event.campus}
              </Text>
            </View>
          </View>

          {/* About the Event */}
          <Text style={styles.sectionHeading}>About this event</Text>
          <Text style={styles.aboutText}>{event.description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#FFFFFF' },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 },
  notFoundText: { fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 12 },
  fallbackBtn: {
    backgroundColor: '#26B5A8',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
  },
  fallbackBtnText: { color: '#FFFFFF', fontWeight: '700' },
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
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  suText: { color: '#3EC1B3', fontWeight: '800', fontSize: 13 },
  scrollContent: { paddingBottom: 110 },
  hero: {
    height: 440,
    backgroundColor: '#1E293B',
    position: 'relative',
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: 540,
  },
  heroControls: {
    position: 'absolute',
    top: 12,
    left: 16,
    right: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circleBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFFFFF',
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
    paddingTop: 24,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  pillRow: { flexDirection: 'row', gap: 8, marginBottom: 6 },
  campusPill: {
    backgroundColor: '#26B5A8',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  campusText: { color: '#FFFFFF', fontSize: 11, fontWeight: '700' },
  categoryPill: {
    backgroundColor: 'rgba(255,255,255,0.22)',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
  },
  categoryText: { color: '#FFFFFF', fontSize: 11, fontWeight: '600' },
  heroTitle: { color: '#FFFFFF', fontSize: 21, fontWeight: '800' },
  heroHost: { color: '#E2E8F0', fontSize: 13, marginTop: 2 },
  body: { padding: 18 },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },
  price: { fontSize: 22, fontWeight: '800', color: '#111827' },
  priceSub: { fontSize: 12, color: '#6B7280', marginTop: 2 },
  rsvpBtn: {
    backgroundColor: '#26B5A8',
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 22,
  },
  rsvpBtnActive: {
    backgroundColor: '#0F172A',
  },
  rsvpBtnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 14 },
  infoCard: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 14,
    gap: 10,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    marginBottom: 18,
  },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  infoText: { fontSize: 13.5, fontWeight: '600', color: '#1E293B' },
  sectionHeading: { fontSize: 16, fontWeight: '700', color: '#111827', marginBottom: 8 },
  aboutText: { fontSize: 14, lineHeight: 21, color: '#4B5563' },
});