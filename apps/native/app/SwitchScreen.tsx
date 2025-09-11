import React from 'react'

import {
  SwitchCustom,
  SwitchDefaultValue,
  SwitchDisabled,
  SwitchPositions,
  SwitchSizes,
  SwitchStatuses,
  SwitchTextFieldsContainerStyle,
  SwitchUsage,
} from '@react-native-blossom-ui/showcase'

import {Heading, AppScrollView} from '../components'

export default function SwitchScreen() {
  return (
    <AppScrollView>
      <Heading>Usage</Heading>
      <SwitchUsage />

      <Heading>Default Value</Heading>
      <SwitchDefaultValue />

      <Heading>Positions</Heading>
      <SwitchPositions />

      <Heading>Sizes</Heading>
      <SwitchSizes />

      <Heading>Statuses</Heading>
      <SwitchStatuses />

      <Heading>Disabled</Heading>
      <SwitchDisabled />

      <Heading>Text Fields Container Style</Heading>
      <SwitchTextFieldsContainerStyle />

      <Heading>Custom</Heading>
      <SwitchCustom />
    </AppScrollView>
  )
}
