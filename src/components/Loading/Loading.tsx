import React from 'react'
import { View, ActivityIndicator, StyleSheet, Modal } from 'react-native'
import { Text } from 'react-native-paper'
import { Colors } from 'theme/Variables'

interface LoadingProps {
  visible: boolean
}

const Loading: React.FC<LoadingProps> = ({ visible }) => {
  if (!visible) return null

  return (
    <Modal visible={visible} transparent>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.primary} />
          <Text style={styles.text}>Loading...</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 10,
  },
})

export default Loading
