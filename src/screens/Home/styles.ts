import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.base.gray600
  },

  header: {
    backgroundColor: theme.colors.base.gray700,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 173,
    position: 'relative'
  },

  content: {
    flex: 1,
    marginTop: 55,
    marginHorizontal: 24
  },
  tasksCreated: {
    color: theme.colors.brand.blue,
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.bold
  },
  tasksDone: {
    color: theme.colors.brand.purple,
    fontSize: theme.fontSize.md,
    fontFamily: theme.fontFamily.bold
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  counterContainer: {
    backgroundColor: theme.colors.base.gray400,
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8
  },
  counterText: {
    color: theme.colors.base.gray200,
    fontSize: theme.fontSize.sm,
    fontFamily: theme.fontFamily.bold
  },

  form: {
    position: 'absolute',
    bottom: -54 / 2,
    height: 54,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 54,
    width: 54,
    borderRadius: 5,
    backgroundColor: theme.colors.brand.blue_dark,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
