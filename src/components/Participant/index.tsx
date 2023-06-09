import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'

interface ParticipantProps {
  name: string
  onRemove: (name: string) => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  function handleRemoveParticipant() {
    onRemove(name)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
