import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native'
import { homeStyles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  const today = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date())

  function handleParticipantAdd() {
    if (participantName === '') {
      return
    }

    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante já existe',
        'Já existe um participante nessa lista com esse nome',
      )
    }

    setParticipants((prevState) => [...prevState, participantName])
    setParticipantName('')
  }

  function handleParticipantRemove(name: string) {
    const participantsWithoutRemovedParticipant = participants.filter(
      (participant) => participant !== name,
    )

    Alert.alert('Remover', `Deseja remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants(participantsWithoutRemovedParticipant)
        },
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.eventName}>Rocketseat One</Text>
      <Text style={homeStyles.eventDate}>{today}</Text>

      <View style={homeStyles.form}>
        <TextInput
          placeholder="Nome do participante"
          style={homeStyles.input}
          placeholderTextColor="#6b6b6b"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity
          style={homeStyles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={homeStyles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        keyExtractor={(item) => item}
        data={participants}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleParticipantRemove}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={homeStyles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de presenças
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
