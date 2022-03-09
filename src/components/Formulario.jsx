import { Text, View,TextInput } from 'react-native'
import React, { Component } from 'react'

export class Formulario extends Component {
  render() {
    return (
      <View>
         <TextInput
        onChangeText="Hola"
        placeholder= "esto es un valor por defecto"
      />
      </View>
    )
  }
}

export default Formulario