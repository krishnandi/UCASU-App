import { Ionicons } from '@expo/vector-icons';
import { useMemo, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TopSearchHeader } from '@/components/TopSearchHeader';
import { CAMPUS_EVENTS, type CampusEvent } from '@/data/events';

const CAMPUSES = ['All', 'Farnham', 'Epsom', 'Canterbury'] as const;

export default function EventsScreen() {
  const [selectedCampus, setSelectedCampus] = useState<(typeof CAMPUSES)[number]>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const filteredEvents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CAMPUS_EVENTS.filter((event) => {
      const matchesCampus = selectedCampus === 'All' || event.campus === selectedCampus;
      const matchesQuery =
        !q ||
        event.title.toLowerCase().includes(q) ||
        event.hostName.toLowerCase().includes(q) ||
        event.venue.toLowerCase().includes(q);
      return matchesCampus && matchesQuery;
    });
  }, [selectedCampus, searchQuery]);

  const toggleSaved = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderEvent = ({ item }: { item: CampusEvent }) => {
    const isSaved = savedIds.includes(item.id);
    return (
      <View style={styles.card}>
        <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
        <View style={styles.cardBody}>
          <View style={styles.metaTop}>
            <Text style={styles.campusBadge}>
              {item.campus} · {item.venue}
            </Text>
            <Text style={styles.priceText}>
              {item.price === 0 ? 'Free' : `£${item.price.toFixed(2)}`}
            </Text>
          </View>

          <Text style={styles.eventTitle}>{item.title}</Text>
          <Text style={styles.hostText}>
            {item.hostName} · {item.dateLabel}
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description}
          </Text>

          <View style={styles.cardFooter}>
            <Pressable
              onPress={() => toggleSaved(item.id)}
              style={[styles.saveBtn, isSaved && styles.saveBtnActive]}
            >
              <Ionicons
                name={isSaved ? 'bookmark' : 'bookmark-outline'}
                size={15}
                color={isSaved ? '#FFFFFF' : '#111827'}
              />
              <Text style={[styles.saveBtnText, isSaved && styles.saveBtnTextActive]}>
                {isSaved ? 'Saved' : 'Save event'}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={filteredEvents}
        keyExtractor={(item) => item.id}
        renderItem={renderEvent}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerBlock}>
            <TopSearchHeader
              title="Events"
              eyebrow="UCA STUDENTS' UNION"
              placeholder="Search events, venues, or hosts..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />

            <View style={styles.filterRow}>
              {CAMPUSES.map((campus) => {
                const active = selectedCampus === campus;
                return (
                  <Pressable
                    key={campus}
                    onPress={() => setSelectedCampus(campus)}
                    style={[styles.pill, active && styles.pillActive]}
                  >
                    <Text style={[styles.pillText, active && styles.pillTextActive]}>
                      {campus}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>No matching events</Text>
            <Text style={styles.emptySub}>Try another campus filter or clear your search.</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  listContent: {
    padding: 18,
    paddingTop: 20,
    paddingBottom: 105,
    gap: 14,
  },
  headerBlock: {
    marginBottom: 4,
  },
  filterRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  pill: {
    paddingHorizontal: 14,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },
  pillActive: {
    backgroundColor: '#0F172A',
    borderColor: '#0F172A',
  },
  pillText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#475569',
  },
  pillTextActive: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  cardImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#E2E8F0',
  },
  cardBody: {
    padding: 14,
  },
  metaTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  campusBadge: {
    fontSize: 12,
    fontWeight: '700',
    color: '#0D9488',
  },
  priceText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#111827',
  },
  eventTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },
  hostText: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2,
    marginBottom: 6,
  },
  description: {
    fontSize: 13.5,
    lineHeight: 19,
    color: '#475569',
  },
  cardFooter: {
    flexDirection: 'row',
    marginTop: 12,
  },
  saveBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: '#F1F5F9',
  },
  saveBtnActive: {
    backgroundColor: '#0D9488',
  },
  saveBtnText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },
  saveBtnTextActive: {
    color: '#FFFFFF',
  },
  emptyBox: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  emptySub: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 4,
  },
});