import React, { memo } from 'react'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import SizeControl from '~components/inspector/controls/SizeControl'
import SwitchControl from '~components/inspector/controls/SwitchControl'

const ModalPanel = () => {
  const { setValueFromEvent } = useForm()
  const size = usePropsSelector('size')

  return (
    <>
      <SwitchControl label="Open" name="isOpen" />
      <SwitchControl label="Centered" name="isCentered" />

      <SizeControl
        label="Size"
        options={['xs', 'sm', 'md', 'lg', 'xl', 'full']}
        value={size}
      />
    </>
  )
}

export default memo(ModalPanel)
