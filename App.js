/**
 * Gasolina ou Álcool
 */
import React, { Component } from "react";
import { View, Text, Image, TextInput, TouchableOpacity, Modal, Button } from "react-native";
import { styles } from "./styles";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gasolina: '',
      alcool: '',
      visivel: false,
    };

    this.enviar = this.enviar.bind(this)
  }

  enviar() {
    this.setState({ visivel: true })
    if (this.state.gasolina === '' || this.state.alcool === '') {
      alert('Preencha todos dados corretamente!')
      return;
    }
  }

  fechar(estatus) {
    this.setState({ visivel: estatus })
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('./src/img/logo.png')}
          />
          <Text style={styles.texto1}>Qual a melhor opção?</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.texto2}>Álcool (preço por litro):</Text>

          <TextInput
            style={styles.input}
            placeholder='R$ '
            keyboardType="numeric"
            onChangeText={(valor) => this.setState({ alcool: valor })}
          />

          <Text style={styles.texto2}>Gasolina (preço por litro):</Text>

          <TextInput
            style={styles.input}
            placeholder='R$ '
            keyboardType="numeric"
            onChangeText={(valor) => this.setState({ gasolina: valor })}
          />

          <TouchableOpacity style={styles.botao} onPress={this.enviar}>
            <Text style={styles.botaoTexto}>Enviar</Text>
          </TouchableOpacity>

          <Modal animationType="slide" visible={this.state.visivel} transparent={true}>
            <View style={styles.viewModal1}>
              <Image
                source={require('./src/img/gas.png')}
                style={styles.imgModal}
              />

              <View style={styles.viewModal2}>
                <Text style={styles.textoModal1}>Compensa usar Álcool</Text>
              </View>

              <Text style={styles.textoModal2}>Com os preços:</Text>

              <View style={styles.viewModal3}>
                <Text style={styles.textoModal3}>Álcool: R$ 4.60</Text>
                <Text style={styles.textoModal3}>Álcool: R$ 4.60</Text>
              </View>

              <TouchableOpacity style={styles.botaoVoltar} onPress={() => this.fechar(false)}>
                <Text style={styles.textoVoltar}>Calcular novamente</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    )
  }
}