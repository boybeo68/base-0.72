import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { useTheme } from '../../hooks'
import { NativeModules, NativeEventEmitter } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
const { DataScanModule } = NativeModules

const Example = () => {
  const { Fonts, Gutters, Layout } = useTheme()
  const [dataQR, setdataQR] = useState([])
  const [result, setResult] = useState<any>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dataEmitter = new NativeEventEmitter(DataScanModule)

  useEffect(() => {
    dataEmitter.addListener('onDataReceived', (res) => {
      console.log('Received data:', res)
      if (res) {
        const convertData = JSON.parse(JSON.stringify(dataQR))
        convertData.push(res)
        console.log('bb conver data', convertData)

        setdataQR(convertData)
      }
    })
    return () => {
      dataEmitter.removeAllListeners('onDataReceived')
    }
  }, [dataEmitter, dataQR])

  const submit = () => {
    const counts: any = {}

    dataQR.forEach((item) => {
      if (counts[item]) {
        counts[item]++
      } else {
        counts[item] = 1
      }
    })

    setResult(counts)
    setdataQR([])
  }

  return (
    <ScrollView style={Layout.fill}>
      {dataQR?.length > 0 && (
        <TouchableOpacity
          onPress={submit}
          style={[
            Layout.fill,
            Layout.center,
            Gutters.smallPadding,
            {
              backgroundColor: 'red',
            },
          ]}
        >
          <Text style={{ color: 'white' }}> Submit</Text>
        </TouchableOpacity>
      )}
      {dataQR?.length === 0 && result && (
        <TouchableOpacity
          onPress={() => {
            setResult(null)
            setdataQR([])
          }}
          style={[
            Layout.fill,
            Layout.center,
            Gutters.smallPadding,
            {
              backgroundColor: 'red',
            },
          ]}
        >
          <Text style={{ color: 'white' }}>Scan Again</Text>
        </TouchableOpacity>
      )}
      {dataQR?.length === 0 && !result && (
        <TouchableOpacity
          onPress={() => {
            setResult(null)
            setdataQR([])
          }}
          style={[Layout.fill, Layout.center, Gutters.smallPadding]}
        >
          <Text style={Fonts.titleSmall}>Welcome to scan app</Text>
          <Text style={Fonts.textLight}>Use device and scan any code you see</Text>
        </TouchableOpacity>
      )}

      {dataQR?.length > 0 &&
        dataQR.map((i, index) => {
          return (
            <View key={index}>
              <Text style={{ color: 'white' }}>{i}</Text>
            </View>
          )
        })}
      {result &&
        Object.keys(result).map((a) => {
          return (
            <View style={[Gutters.smallMargin]}>
              <Text style={Fonts.textSuccess}>Products: {a}</Text>
              <Text style={[Fonts.textBold, Fonts.textPrimary]}>Count: {result[a]}</Text>
            </View>
          )
        })}
    </ScrollView>
  )
}

export default Example
