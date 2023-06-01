import { View, LayoutChangeEvent } from 'react-native'

import { Home } from './screens/Home'

type AppProps = {
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined
}

export function App({ onLayout }: AppProps) {
  return (
    <View style={{ flex: 1 }} onLayout={onLayout}>
      <Home />
    </View>
  )
}
