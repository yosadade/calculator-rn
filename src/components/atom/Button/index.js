import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';

const Button = ({type, title, onPress, colorNumber}) => {
  if (type === 'clear') {
    return (
      <TouchableOpacity style={styles.containerClear} onPress={onPress}>
        <Text style={styles.clear}>{title}</Text>
      </TouchableOpacity>
    );
  }
  if (type === 'action') {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.action}>{title}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.number(colorNumber)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 2,
  },
  containerClear: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  action: {
    fontSize: 24,
    color: colors.text.secondary,
  },
  clear: {
    fontSize: 24,
    color: colors.text.secondary,
    textAlign: 'right',
  },
  number: (colorNumber) => ({
    fontSize: 24,
    color: colorNumber,
  }),
});
