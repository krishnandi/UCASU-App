import { Stack } from 'expo-router';

// The Search tab has its own Stack, so pages pushed from it (like a society page)
// open on top of the search list while the tab bar stays visible.
export default function SearchLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
