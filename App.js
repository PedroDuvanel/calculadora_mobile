import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CalculatorApp() {
  const [input, setInput] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      setInput('');
    } else {
      setInput(input + value);
    }
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (e) {
      setInput('Erro');
    }
  };

  const buttons = [
    ['C', '', '', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', '']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{input}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={[
                  styles.button,
                  button === '=' ? styles.equalsButton : button === 'C' ? styles.clearButton : null,
                ]}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  displayContainer: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#333',
    padding: 20,
  },
  displayText: {
    color: '#fff',
    fontSize: 60,
  },
  buttonContainer: {
    flex: 5,
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#505050',
    flex: 1,
    height: 80,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
  },
  equalsButton: {
    backgroundColor: '#ff9500',
  },
  clearButton: {
    backgroundColor: '#d4d4d2',
    color: '#000',
  },
  
});