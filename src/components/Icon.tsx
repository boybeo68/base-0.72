import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import Octicons from 'react-native-vector-icons/Octicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'

export const ICON_TYPE = {
  ICONICONS: 'ionicons',
  ANT_ICON: 'ant',
  EVIL_ICONS: 'EVIL',
  FONT_AWESOME: 'FONTAWESOME',
  Fontisto: 'Fontisto',
  FONT_AWESOME5: 'FONTAWESOME5',
  MATERIAL_ICONS: 'MaterialIcons',
  FEATHER_ICONS: 'FEATHER',
  ENTYPO: 'ENTYPO',
  OCTICONS: 'OCTICONS',
  MATERIAL_COMMUNITY: 'MATERIALCOMMUNITY',
}
interface IconProps {
  type: any
  name: any
  color?: string
  size?: any
  paddingLeft?: number
  style?: any
}
export function IconX({ type, name, color, size, paddingLeft, style }: IconProps) {
  const colorx = color || '#aaaaaa'
  const sizex = size || 24
  const namex = name || 'right'
  const paddingx = paddingLeft || null

  let Element = Ionicons

  switch (type) {
    case ICON_TYPE.ANT_ICON:
      Element = AntDesign
      break

    case ICON_TYPE.ENTYPO:
      Element = Entypo
      break
    case ICON_TYPE.Fontisto:
      Element = Fontisto
      break

    case ICON_TYPE.MATERIAL_ICONS:
      Element = MaterialIcons
      break

    case ICON_TYPE.FEATHER_ICONS:
      Element = Feather
      break

    case ICON_TYPE.EVIL_ICONS:
      Element = EvilIcons
      break

    case ICON_TYPE.FONT_AWESOME:
      Element = FontAwesome
      break
    case ICON_TYPE.FONT_AWESOME:
      // @ts-ignore
      Element = FontAwesome5
      break

    case ICON_TYPE.OCTICONS:
      Element = Octicons
      break
    case ICON_TYPE.ICONICONS:
      Element = Ionicons
      break
    case ICON_TYPE.MATERIAL_COMMUNITY:
      Element = MaterialCommunityIcons
      break

    default:
      Element = MaterialIcons
      break
  }

  return (
    <Element name={namex} size={sizex} color={colorx} style={[{ paddingLeft: paddingx }, style]} />
  )
}
