import { ThemedText } from '@/src/components/ThemedText'
import { ThemedView } from '@/src/components/ThemedView'
import { Link } from 'expo-router'
import { StyleSheet } from 'react-native'

export default function HomeScreen({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemedView style={styles.content}>
      <ThemedText>Hello World</ThemedText>
      <Link href="/(screens)/create-new" style={styles.link}>
        <ThemedText type="link">Create New</ThemedText>
      </Link>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: 'hidden',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
})
