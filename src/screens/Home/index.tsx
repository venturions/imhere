import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { homeStyles } from './styles'
import { Participant } from '../../components/Participant'

export function Home() {
  function handleParticipantAdd() {
    console.log('Você clicou no botão de Adicionar!')
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.eventName}>Nome do Evento</Text>
      <Text style={homeStyles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={homeStyles.form}>
        <TextInput
          placeholder="Nome do participante"
          style={homeStyles.input}
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity
          style={homeStyles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={homeStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}
