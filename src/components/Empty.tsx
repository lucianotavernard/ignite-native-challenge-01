import { Image, StyleSheet, Text, View } from 'react-native'

import clipboard from '@/assets/clipboard.png'
import { theme } from '../styles/theme'

export function Empty() {
  return (
    <View style={styles.container}>
      <Image source={clipboard} style={styles.image} />

      <Text style={styles.textBold}>
        Você ainda não tem tarefas cadastradas
      </Text>

      <Text style={[styles.textBold, styles.textRegular]}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingVertical: 48,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderTopColor: theme.colors.base.gray400,
    borderEndColor: 'transparent',
    borderStartColor: 'transparent',
    borderBottomColor: 'transparent'
  },
  image: {
    marginBottom: 16
  },
  textBold: {
    fontSize: 14,
    fontFamily: theme.fontFamily.bold,
    color: theme.colors.base.gray300
  },
  textRegular: {
    fontFamily: theme.fontFamily.regular
  }
})
