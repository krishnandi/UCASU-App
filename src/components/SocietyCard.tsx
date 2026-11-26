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
      <View style={[styles.logoBox, { backgroundColor: item.bg }]}>
        <Image
          source={item.image}
          style={styles.logo}
          resizeMode="contain"
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
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: '80%',
  },
  heart: {
    position: 'absolute',
    top: 10,
    right: 12,
  },
  info: {
    padding: 14,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  meta: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
});