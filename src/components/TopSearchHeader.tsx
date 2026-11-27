import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

type TopSearchHeaderProps = {
  title: string;
  eyebrow?: string;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
};

export function TopSearchHeader({
  title,
  eyebrow,
  placeholder = 'Search...',
  value = '',
  onChangeText,
}: TopSearchHeaderProps) {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    if (expanded && onChangeText) {
      onChangeText('');
    }
    setExpanded((prev) => !prev);
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.topRow}>
        <View>
          {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
          <Text style={styles.title}>{title}</Text>
        </View>

        <Pressable
          onPress={handleToggle}
          hitSlop={10}
          style={({ pressed }) => [styles.searchIconBtn, pressed && styles.pressed]}
        >
          <Ionicons name={expanded ? 'close' : 'search'} size={20} color="#3D3D3D" />
        </Pressable>
      </View>

      {expanded && onChangeText ? (
        <View style={styles.inputRow}>
          <Ionicons name="search" size={16} color="#9CA3AF" />
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor="#9CA3AF"
            autoFocus
            style={styles.input}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginBottom: 14 },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  eyebrow: { fontSize: 11, fontWeight: '800', letterSpacing: 1, color: '#0D9488', marginBottom: 2 },
  title: { fontSize: 28, fontWeight: '800', color: '#111827' },
  searchIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRow: {
    marginTop: 12,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 8,
  },
  input: { flex: 1, fontSize: 15, color: '#111827' },
  pressed: { opacity: 0.75 },
});