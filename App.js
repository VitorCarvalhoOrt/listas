import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const produtos = [
    { 'id': 1, 'nome': 'Notebook' },
    { 'id': 2, 'nome': 'Memoria'  },
    { 'id': 3, 'nome': 'Monitor'  },
    { 'id': 4, 'nome': 'Teclado'  },
  ]


  return (
    <View style={styles.container}>

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
