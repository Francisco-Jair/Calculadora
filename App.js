import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'


export default function App() {

  state = {
    displayValue: '0'//Vai aponta o valor do estado para a propriedade do componente display
  }

  return (
    <View style={styles.container}>

      <Display value={this.state.displayValue} />

      <View style={styles.button}>
        <Button label='AC'></Button>
        <Button label='/'></Button>
        <Button label='7'></Button>
        <Button label='8'></Button>
        <Button label='9'></Button>
        <Button label='*'></Button>
        <Button label='4'></Button>
        <Button label='5'></Button>
        <Button label='6'></Button>
        <Button label='-'></Button>
        <Button label='1'></Button>
        <Button label='2'></Button>
        <Button label='3'></Button>
        <Button label='+'></Button>
        <Button label='0'></Button>
        <Button label='.'></Button>
        <Button label='='></Button>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
