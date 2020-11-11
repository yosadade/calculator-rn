import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../../utils/colors';
import {Button} from '../../components';

const Main = () => {
  const [hasil, setHasil] = useState(0);
  const [hitung, setHitung] = useState(0);
  const data = [
    {
      id: 1,
      type: 'action',
      title: '(',
    },
    {
      id: 2,
      type: 'action',
      title: ')',
    },
    {
      id: 3,
      type: 'action',
      title: '/',
    },
    {
      id: 4,
      type: 'action',
      title: 'x',
    },
  ];

  const inputNumber = (value) => {
    if (hitung === 0) {
      setHitung(value);
    } else {
      setHitung(hitung + '' + value);
    }
  };

  const onHandleClear = () => {
    setHasil(0);
    setHitung(0);
  };

  const onHandleHitungHasil = () => {
    // eslint-disable-next-line no-eval
    let hasils = eval(hitung);
    setHitung(hasils);
  };

  return (
    <View style={styles.page}>
      <StatusBar
        backgroundColor={colors.background.primary}
        barStyle="light-content"
      />

      <TouchableOpacity style={styles.output}>
        <Text style={styles.outputNumber}>{hitung}</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <TouchableOpacity style={styles.wrapperClear} onPress={onHandleClear}>
          <Text style={styles.action}>clear</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Button type="action" title="(" onPress={() => inputNumber('(')} />
        <Button type="action" title=")" onPress={() => inputNumber(')')} />
        <Button type="action" title="/" onPress={() => inputNumber('/')} />
        <Button type="action" title="x" onPress={() => inputNumber('*')} />
      </View>
      <View style={styles.content}>
        <Button title="7" onPress={() => inputNumber(7)} />
        <Button title="8" onPress={() => inputNumber(8)} />
        <Button title="9" onPress={() => inputNumber(9)} />
        <Button type="action" title="+" onPress={() => inputNumber('+')} />
      </View>
      <View style={styles.content}>
        <Button title="4" onPress={() => inputNumber(4)} />
        <Button title="5" onPress={() => inputNumber(5)} />
        <Button title="6" onPress={() => inputNumber(6)} />
        <Button type="action" title="-" onPress={() => inputNumber('-')} />
      </View>
      <View style={styles.content}>
        <Button title="1" onPress={() => inputNumber(1)} />
        <Button title="2" onPress={() => inputNumber(2)} />
        <Button title="3" onPress={() => inputNumber(3)} />
        <Button type="action" title="=" onPress={() => onHandleHitungHasil()} />
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
  output: {
    flex: 1,
  },
  outputNumber: {
    fontSize: 48,
    color: colors.text.secondary,
    textAlign: 'right',
    padding: 10,
  },
  content: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  action: {
    fontSize: 24,
    color: colors.text.secondary,
    textAlign: 'right',
  },
  wrapperClear: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 10,
  },
  wrapperNumber: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  number: {
    fontSize: 24,
    color: colors.text.primary,
  },
});
