import { SocietyCard } from '@/components/SocietyCard';
import { SOCIETIES } from '@/data/societies';
import { FlatList } from 'react-native';

export default function Search() {
  return (
    <FlatList
      data={SOCIETIES}
      keyExtractor={(s) => s.id}
      numColumns={2}
      renderItem={({ item }) => <SocietyCard item={item} />}
      contentContainerStyle={{ padding: 10, paddingTop: 70 }}
    />
  );
}
