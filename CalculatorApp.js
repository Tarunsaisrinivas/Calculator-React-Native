/* eslint-disable prettier/prettier */
/* eslint-disable no-eval */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CalculatorApp = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleButtonPress = value => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
      setExpression('');
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === '⌫') {
      setExpression(prevExpression =>
        prevExpression.slice(0, prevExpression.length - 1),
      );
    } else if (value === '%') {
      const percentageValue = parseFloat(expression) / 100;
      setExpression(percentageValue.toString());
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };

  const renderButton = (value, style = {}) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => handleButtonPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{expression}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {renderButton('C')}
          {renderButton('⌫')}
          {renderButton('%')}
          {renderButton('/', {color: '#000'})}
        </View>
        <View style={styles.row}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('*', {color: '#FF9500'})}
        </View>
        <View style={styles.row}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('-', {color: '#FF9500'})}
        </View>
        <View style={styles.row}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('+', styles.special)}
        </View>
        <View style={styles.row}>
          {renderButton('00')}
          {renderButton('0')}
          {renderButton('.', {color: '#ffffff'})}
          {renderButton('=', {backgroundColor: '#FF9500'})}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#1C1C1E',
  },
  resultContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    color: '#ffffff',
    fontSize: 40,
  },
  buttonContainer: {
    backgroundColor: '#2C2C2E',
  },
  row: {
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 1,
    borderRightColor: '#fff',
    borderBottomColor: '#fff',
  },
  special: {
    color: '#FF9500',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 24,
  },
});

export default CalculatorApp;
