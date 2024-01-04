import { View, Text} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Redirect } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { USER_STORAGE_KEY } from '../data/api';
import { useAuth } from './context/AuthContext';

const Page = () =>{
    const [hasID,setHasID] = useState(false);

    useEffect(() => {
        const loadId = async () => {
            const id = await AsyncStorage.getItem(USER_STORAGE_KEY);
            if (!id) {
              const randomUserid = Math.random().toString(36);
              await AsyncStorage.setItem(USER_STORAGE_KEY, randomUserid);
            }
            setHasID(true);
          };
        loadId();
    }, []);

    if (hasID) {
        return <Redirect href="/(tabs)/search" />;
      } else {
        return <View />;
      }
};

export default Page;

// import { View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import AsyncStorage from '@react-native-async-storage/async-storage'
// import { Redirect } from 'expo-router';
// import { USER_STORAGE_KEY } from '../data/api'
// import { useAuth } from './context/AuthContext'
// import Login from './screens/Login' // import the Login component
// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('MyApp', () => App);

// const Page = () => {
//   const [hasID, setHasID] = useState(false)
//   const { authState } = useAuth() // get the authentication state

//   useEffect(() => {
//     const loadId = async () => {
//       const id = await AsyncStorage.getItem(USER_STORAGE_KEY)
//       if (!id) {
//         const randomUserid = Math.random().toString(36)
//         await AsyncStorage.setItem(USER_STORAGE_KEY, randomUserid)
//       }
//       setHasID(true)
//     }
//     loadId()
//   }, [])

//   if (!authState?.authenticated) {
//     return <Login /> // render the Login page if the user is not authenticated
//   } else if (hasID) {
//     return <Redirect href="/(tabs)/sets" />
//   } else {
//     return <View />
//   }
// }

// export default Page