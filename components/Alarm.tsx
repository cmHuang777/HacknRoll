import React from 'react'
import { StyleSheet } from 'react-native';
import { Card, Text, Toggle } from '@ui-kitten/components'

const Alarm = () => {
  const [activeChecked, setActiveChecked] = React.useState(true);

  const onActiveCheckedChange = (isChecked: boolean): void => {
    setActiveChecked(isChecked);
  };

  return (
    <Card >
      <Text>Alarm</Text>
      <Toggle
        style={styles.toggle}
        checked={activeChecked}
        onChange={onActiveCheckedChange}
      />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  toggle: {
    margin: 2,
  },
});

export default Alarm