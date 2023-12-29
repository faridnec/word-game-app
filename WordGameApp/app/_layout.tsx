import React from 'react'
import { Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import 'react-native-url-polyfill/auto';

const Layout = () => {
  return (
    <Stack
    screenOptions={{
        headerStyle: {
            backgroundColor: Colors.primary,
        },
        headerTintColor: '#fff'
    }}
    >
        <Stack.Screen name='(tabs)' options={{ headerShown: false}} />

        <Stack.Screen
        name='(modals)/set/[id]'
        options={{
          presentation: 'modal',
          title: '',
        }}
        />
        
    </Stack>
  )
}

export default Layout