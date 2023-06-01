import { StatusBar } from 'react-native'
import {
  useFonts,
  Inter_700Bold,
  Inter_400Regular
} from '@expo-google-fonts/inter'

import { App } from './src/App'
import { theme } from './src/styles/theme'

export default function Index() {
  const [fontsLoaded] = useFonts({
    Inter_700Bold,
    Inter_400Regular
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.base.gray700}
        translucent
      />

      <App />
    </>
  )
}
