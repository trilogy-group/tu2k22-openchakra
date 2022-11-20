import React, { memo } from 'react'
import SwitchControl from '~components/inspector/controls/SwitchControl'
import TextControl from '~components/inspector/controls/TextControl'

const LoopPanel = () => {
  return (
    <>
      <SwitchControl label="Looped View" name="loopView" />
      <TextControl label="No of loops" name="loopNumber" />
    </>
  )
}

export default memo(LoopPanel)
