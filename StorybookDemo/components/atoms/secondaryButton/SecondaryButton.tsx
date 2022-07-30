import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../theme';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    borderColor: colors.blueLight,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: colors.white
  },
  buttonText: {
    color: colors.blueLight,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    flex: 1,
  },
});

export function SecondaryButton({text, onPress, color, textColor}: ButtonProps) {
  return (
  <View style={styles.buttonContainer}>
    <TouchableOpacity
      style={[styles.button, !!color && {backgroundColor: color}]}
      onPress={onPress}
      activeOpacity={0.8}>
      <Text style={[styles.buttonText, !!textColor && {color: textColor}]}>
        {text}
      </Text>
    </TouchableOpacity>
  </View>
  )
}
