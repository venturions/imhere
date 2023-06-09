import { View, Text } from 'react-native'
import { homeStyles } from './styles'

export function Home() {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.eventName}>Nome do Evento</Text>
      <Text style={homeStyles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>
    </View>
  )
}
