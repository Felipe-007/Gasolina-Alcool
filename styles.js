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
    paddingLeft: 18,
    marginTop: 71,
  },
  texto2: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    fontSize: 18,
    height: 48,
    width: 354,
    marginBottom: 5,
    borderRadius: 6,
    marginTop: 10,
    paddingLeft: 19,
  },
  botao: {
    height: 48,
    width: 354,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF4130',
    marginTop: 21,
  },
  botaoTexto: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  viewModal1: {
    backgroundColor: '#292929',
    alignItems: 'center',
    flex: 1,
  },
  imgModal: {
    marginTop: 90
  },
  viewModal2: {
    padding: 35
  },
  textoModal1: {
    color: '#30EF5A',
    fontSize: 25,
    fontWeight: 'bold',
  },
  textoModal2: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  viewModal3: {
    padding: 13,
  },
  textoModal3: {
    fontSize: 18,
    color: '#FFFFFF',
    lineHeight: 30,
  },
  botaoVoltar: {
    height: 48,
    width: 354,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 21,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#EF4130',
    backgroundColor: 'transparent',
  },
  textoVoltar: {
    fontSize: 20,
    color: '#EF4130',
    fontWeight: 'bold',
  }
})