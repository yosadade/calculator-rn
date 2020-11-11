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
  const [theme, setTheme] = useState(false);
  const [icon, setIcon] = useState(false);

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
    let dataString = String(hasils);
    setHitung(dataString.substr(0, 4));
  };

  const onHandleTheme = () => {
    setTheme(!theme);
    setIcon(!icon);
  };

  const styles = theme ? lightTheme : darkTheme;
  const stylesNumber = theme ? colors.text.tertiary : colors.text.primary;

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
        <Button type="action" title="(" onPress={() => inputNumber('(')} />
        <Button type="action" title=")" onPress={() => inputNumber(')')} />
        <Button type="action" title="/" onPress={() => inputNumber('/')} />
        <Button type="action" title="x" onPress={() => inputNumber('*')} />
      </View>
      <View style={styles.content}>
        <Button
          title="7"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(7)}
        />
        <Button
          title="8"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(8)}
        />
        <Button
          title="9"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(9)}
        />
        <Button type="action" title="+" onPress={() => inputNumber('+')} />
      </View>
      <View style={styles.content}>
        <Button
          title="4"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(4)}
        />
        <Button
          title="5"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(5)}
        />
        <Button
          title="6"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(6)}
        />
        <Button type="action" title="-" onPress={() => inputNumber('-')} />
      </View>
      <View style={styles.content}>
        <Button
          title="1"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(1)}
        />
        <Button
          title="2"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(2)}
        />
        <Button
          title="3"
          colorNumber={stylesNumber}
          onPress={() => inputNumber(3)}
        />
        <Button type="action" title="=" onPress={() => onHandleHitungHasil()} />
      </View>
      <View style={styles.content}>
        <Button
          type="action"
          title={icon ? 'L' : 'D'}
          onPress={() => onHandleTheme()}
        />
        <Button
          title="0"
          colorNumber={stylesNumber}
          onPress={() => inputNumber('0')}
        />
        <Button
          title="."
          colorNumber={stylesNumber}
          onPress={() => inputNumber('.')}
        />
        <Button type="action" title="C" onPress={() => onHandleClear()} />
      </View>
    </View>
  );
};

export default Main;

const darkTheme = StyleSheet.create({
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
});

const lightTheme = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background.secondary,
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
