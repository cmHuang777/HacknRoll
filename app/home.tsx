import { View, Text, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Alarm from '@/components/Alarm'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link, Stack, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import { AlarmType } from '@/types'

const home = () => {
  const {colors} = useTheme()
  const router = useRouter()

  const handlePress = (alarm: AlarmType) => {
    console.log('pressed')
    router.push({
      pathname: '/addAlarm',
      params: { alarm: JSON.stringify(alarm) },
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <Stack.Screen options={{
        headerTitle: 'Alarms',
        headerRight: () => (
            <TouchableOpacity onPress={
                () => handlePress({
                  id: '1',
                  name: '',
                  time: new Date(Date.now()),
                  enabled: false,
                  days: {mon: false, tue: false, wed: false, thu: false, fri: false, sat: false, sun: false},
                })
              }>
              <Ionicons 
                name="add-circle"
                size={24}
                color={colors.text}
              />

            </TouchableOpacity>
                
        )
      }} />
      <ScrollView>
        <View>
          <Text>home</Text>
          <Alarm />
        </View>

      </ScrollView>      
    </SafeAreaView>
  )
}

export default home