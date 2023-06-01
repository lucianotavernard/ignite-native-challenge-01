import { RefObject } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

import { theme } from '@/styles/theme'

type InputProps = TextInputProps & {
  inputRef: RefObject<TextInput>
  value?: string
}

export function Input({ inputRef, ...rest }: InputProps) {
  return (
    <TextInput
      {...rest}
      ref={inputRef}
      style={[
        styles.input,
        inputRef.current?.isFocused() ? styles.inputBorder : null
      ]}
      placeholderTextColor={theme.colors.base.gray300}
      returnKeyType="done"
      autoCorrect={false}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    width: '75%',
    height: 54,
    padding: 16,
    marginRight: 4,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: theme.colors.base.gray700,
    color: theme.colors.base.gray100,
    backgroundColor: theme.colors.base.gray500,
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.regular
  },
  inputBorder: {
    borderColor: theme.colors.brand.purple
  }
})
