import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';
import { AlarmType } from '@/types';

const addAlarm = () => {
  const { alarm } = useLocalSearchParams<{ alarm: AlarmType }>();
  return (
    <View>
      <Text>addAlarm</Text>
    </View>
  )
}

export default addAlarm