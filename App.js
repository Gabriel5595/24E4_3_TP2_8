import { View, Text, StyleSheet } from 'react-native';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Lista de Contatos</Text>
      <ContactList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});
