import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { homeStyles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([
    'Alex',
    'Diego',
    'Rodrigo',
    'Alex',
    'Diego',
    'Rodrigo',
    'Alex',
    'Diego',
    'Rodrigo',
  ])

  function handleParticipantAdd() {
    setParticipants((state) => {
      return [...state, 'teste']
    })
  }

  function handleParticipantRemove(name: string) {
    console.log(participants.filter((participant) => participant !== name))

    const participantsWithoutRemovedParticipant = participants.filter(
      (participant) => participant !== name,
    )

    setParticipants(participantsWithoutRemovedParticipant)
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
