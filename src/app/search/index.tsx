import { useMemo, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';

// Replace these with your actual imports from @/data/societies and @/components/SocietyCard
import { SocietyCard } from '@/components/SocietyCard';
import { SOCIETIES, type Society } from '@/data/societies';

const CAMPUSES = ['All', 'Farnham', 'Epsom', 'Canterbury'];

export default function HomeScreen() {
  const [selectedCampus, setSelectedCampus] = useState<string>('All');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const visibleSocieties = useMemo(() => {
    if (selectedCampus === 'All') {
      return SOCIETIES;
    }
    return SOCIETIES.filter((s: Society) => s.campus === selectedCampus);
  }, [selectedCampus]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={visibleSocieties}
        keyExtractor={(s: Society) => s.id}
        numColumns={2}
        renderItem={({ item }) => <SocietyCard item={item} />}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.title}>Clubs/ Societies</Text>

            <Pressable
              onPress={() => setIsOpen((prev) => !prev)}
              style={styles.dropdownButton}
            >
              <Text style={styles.dropdownButtonText}>
                Campus: {selectedCampus} {isOpen ? '▲' : '▼'}
              </Text>
            </Pressable>

            {isOpen && (
              <View style={styles.dropdownMenu}>
                {CAMPUSES.map((campus) => (
                  <Pressable
                    key={campus}
                    onPress={() => {
                      setSelectedCampus(campus);
                      setIsOpen(false);
                    }}
                    style={[
                      styles.dropdownItem,
                      campus === selectedCampus && styles.dropdownItemSelected,
                    ]}
                  >
                    <Text style={styles.dropdownItemText}>{campus}</Text>
                  </Pressable>
                ))}
              </View>
            )}
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  list: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listContent: {
    padding: 10,
    paddingTop: 70,
    backgroundColor: '#ffffff',
  },
  header: {
    marginBottom: 12,
    paddingHorizontal: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000000',
  },
  dropdownButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    backgroundColor: '#ffffff',
  },
  dropdownButtonText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#000000',
  },
  dropdownMenu: {
    marginTop: 4,
    borderWidth: 1,
    borderColor: '#d0d0d0',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  dropdownItemSelected: {
    backgroundColor: '#f0f0f3',
  },
  dropdownItemText: {
    fontSize: 15,
    color: '#000000',
  },
});