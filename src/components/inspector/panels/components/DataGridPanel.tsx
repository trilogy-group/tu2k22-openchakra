import React, { memo } from 'react'
import SwitchControl from '~components/inspector/controls/SwitchControl'
import TextControl from '~components/inspector/controls/TextControl'

const DataGridPanel = () => {
  return (
    <>
      <TextControl name="rows" label="rows" />
      <TextControl name="columns" label="columns" />
      <SwitchControl name={'checkboxSelection'} label={'Checkbox Selection'} />
      <SwitchControl
        name={'disableSelectionOnClick'}
        label={'Selection on click'}
      />
    </>
  )
}

export default memo(DataGridPanel)
