import React from 'react'
import { View, Text } from 'react-native-animatable'

const ProfileLoggedScreen = ({user}) => {
  console.log(user)
  return (
    <View style={{margin: 20}}>
        <Text style={{fontSize: 30}}>
            test
        </Text>
    </View>
 )
}

export default ProfileLoggedScreen;