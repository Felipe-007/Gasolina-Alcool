/**
 * Gasolina ou Álcool
 */
import React, { Component } from "react";
import { View, Text, Image, TextInput } from "react-native";
import { styles } from "./styles";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
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
            placeholder = 'R$ '
          />
        </View>
      </View>
    )
  }
}