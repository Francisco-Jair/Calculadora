import React from 'react'
import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'


const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#FFFFFF',
        backgroundColor: '#FA8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})


export default props => {

    const stylesButton = [styles.button]

    if (props.double) {
        stylesButton.push(styles.buttonDouble)
    }
    if (props.triple) {
        stylesButton.push(styles.buttonTriple)
    }
    if (props.operation) {
        stylesButton.push(styles.operationButton)
    }
    //() => props.onClick(props.label)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}
//Como o valor esta sendo passado por paramentro aqui só precisamos passar a função no outro componente sem o valor
        //Pois o label está definido