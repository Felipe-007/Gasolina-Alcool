import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  header: {
    flex: 1,
    marginTop: 90,
    alignItems: 'center',
  },
  texto1: {
    marginTop: 35,
    fontSize: 25,
    color: '#FFF',
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'flex-start',
    flex: 2,
    padding: 18,
  },
  texto2: {
    fontSize: 18,
    marginTop: 71,
    color: '#FFF'
  },
  input: {
    height: 48,
    width: 180,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    padding: 10,  // margem inicial
    marginTop: 10,
  },
})