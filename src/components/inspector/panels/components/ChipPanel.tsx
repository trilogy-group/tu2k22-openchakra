import React, { memo } from 'react'
import ColorsControl from '~components/inspector/controls/ColorsControl'
import SizeControl from '~components/inspector/controls/SizeControl'
import { Select } from '@chakra-ui/react'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'
import FormControl from '~components/inspector/controls/FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'
import IconControl from '~components/inspector/controls/IconControl'
import SwitchControl from '~components/inspector/controls/SwitchControl'
import TextControl from '~components/inspector/controls/TextControl'

const ChipPanel = () => {
  const { setValueFromEvent } = useForm()

  const variant = usePropsSelector('variant')
  const size = usePropsSelector('size')

  return (
    <>
      <ChildrenControl />

      <FormControl htmlFor="size" label="Size">
        <Select
          id="size"
          onChange={setValueFromEvent}
          name="size"
          size="sm"
          value={size || ''}
        >
          <option>small</option>
          <option>medium</option>
        </Select>
      </FormControl>

      <TextControl name={'label'} label="Label" />

      <SwitchControl name={'disabled'} label="Disabled" />
    </>
  )
}

export default memo(ChipPanel)
