import { ScrollView, Text, View } from 'react-native';

import { EXISTING_EVENTS } from '@/data/events';

export default function EventPreviewScreen() {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: 'white' }}
      contentContainerStyle={{ padding: 20, gap: 16 }}
    >
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Events preview
      </Text>

      {EXISTING_EVENTS.map((event) => (
        <View key={event.id} style={{ padding: 12, borderWidth: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            {event.title}
          </Text>
          <Text>{event.date ?? 'Date to be confirmed'}</Text>
          <Text>{event.location} · {event.campus}</Text>
          {event.priceLabel && <Text>{event.priceLabel}</Text>}
        </View>
      ))}
    </ScrollView>
  );
}