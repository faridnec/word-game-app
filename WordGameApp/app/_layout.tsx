import React from 'react'
import { Stack, useRouter } from 'expo-router'
import Colors from '@/constants/Colors'
import 'react-native-url-polyfill/auto';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { defaultStyleSheet } from '@/constants/Styles';

const Layout = () => {

  const router = useRouter();

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
            headerLeft: () => (
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name='close-outline' size={24} color={'#fff'} />
              </TouchableOpacity>
            ),
          }}
        />

        <Stack.Screen
          name='(modals)/set/create'
          options={{
            presentation: 'modal',
            title: 'Create Card Set',
            // headerLeft: () => (
            //   <TouchableOpacity onPress={() => router.back()}>
            //     <Ionicons name='close-outline' size={24} color={'#fff'} />
            //   </TouchableOpacity>
            // ),
          }}
        />

        <Stack.Screen
                name="(modals)/(cards)/[id]"
                options={{
                  presentation: 'modal',
                  title: 'Update Set Cards',
                  headerLeft: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                      <Ionicons name="close-outline" size={24} color="#fff" />
                    </TouchableOpacity>
                  ),
                }}
              />
            </Stack>
        
  )
}

export default Layout