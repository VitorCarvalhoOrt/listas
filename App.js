import { StyleSheet, Text, View, ScrollView, FlatList, SectionList } from 'react-native';

export default function App() {

  const produtos = [
    { 'id': 1, 'nome': 'Notebook' },
    { 'id': 2, 'nome': 'Memoria' },
    { 'id': 3, 'nome': 'Monitor' },
    { 'id': 4, 'nome': 'Teclado' },
    { 'id': 5, 'nome': 'Mouse' },
  ]

  const pratos = [
    {
      title: 'Prato Principal',
      data: ['Pizza', 'Hamburguer', 'Risotto']
    },
    {
      title: 'Acompanhamentos',
      data: ['Batata frita', 'Cebola frita', 'Camarao']
    },
    {
      title: 'Bebidas',
      data: ['Agua', 'CocaCola', 'Vinho']
    },
  ]

  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={item => item.id}
        initialNumToRender={20}
        renderItem={({ item }) => (
          <Text>{item.id} - {item.nome}</Text>
        )} />

      <SectionList
        sections={pratos}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (

          <View>
            <Text>{item}</Text>
          </View>
        )}

        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{section.title}</Text>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});