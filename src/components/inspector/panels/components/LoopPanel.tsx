import React, { memo } from 'react'
import SwitchControl from '~components/inspector/controls/SwitchControl'
import TextControl from '~components/inspector/controls/TextControl'

const LoopPanel = () => {
  return (
    <>
      <TextControl label="List" name="list" />
      <SwitchControl label="Looped View" name="loopView" />
      <TextControl label="Preview No of loops" name="loopNumber" />
    </>
  )
}

export default memo(LoopPanel)
