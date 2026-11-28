import { Society } from '@/data/societies';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export function SocietyCard({ item }: { item: Society }) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() =>
        router.push({
          pathname: '/(tabs)/clubs/society/[id]',
          params: { id: item.id },
        })
      }
      style={styles.card}
    >
      <View style={styles.logoBox}>
        <Image
          source={item.image}
          style={styles.logo}
          resizeMode="cover"
        />
        <View style={styles.heart}>
          <Ionicons name="heart-outline" size={20} color="#fff" />
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.meta}>
          {item.campus} · {item.price === 0 ? 'Free' : `£${item.price.toFixed(2)}`}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 6,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: '#43C0BA',
  },
  logoBox: {
    height: 125,
    backgroundColor: '#1E293B',
    position: 'relative',
  },
  logo: {
    width: '100%',
    height: '100%',
  },
  heart: {
    position: 'absolute',
    top: 10,
    right: 12,
  },
  info: {
    padding: 8,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 1,
  },
  meta: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
    marginBottom: 3,
    marginLeft: 2,
  },
});