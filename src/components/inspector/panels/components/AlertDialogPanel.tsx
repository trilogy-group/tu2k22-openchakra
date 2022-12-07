import React, { memo } from 'react'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import SizeControl from '~components/inspector/controls/SizeControl'
import SwitchControl from '~components/inspector/controls/SwitchControl'
import { Select, Tooltip } from '@chakra-ui/react'
import FormControl from '~components/inspector/controls/FormControl'
import TextControl from '~components/inspector/controls/TextControl'

const AlertDialogPanel = () => {
  const { setValueFromEvent } = useForm()
  const size = usePropsSelector('size')
  const motionPreset = usePropsSelector('motionPreset')

  return (
    <>
      <SwitchControl label="Show Preview" name="showpreview" />
      <SwitchControl label="isOpen" name="isOpen" />
      <SwitchControl label="Centered" name="isCentered" />
      <TextControl
        name="leastDestructiveRef"
        label="Least Destructive Ref(Required)"
      />
      <FormControl htmlFor="motionPreset" label="Transition">
        <Select
          id="motionPreset"
          onChange={setValueFromEvent}
          name="motionPreset"
          size="sm"
          value={motionPreset || ''}
        >
          <option>scale</option>
          <option>slideInBottom</option>
          <option>slideInRight</option>
          <option>none</option>
        </Select>
      </FormControl>

      <SizeControl
        label="Size"
        options={['xs', 'sm', 'md', 'lg', 'xl']}
        value={size}
      />
    </>
  )
}

export default memo(AlertDialogPanel)
