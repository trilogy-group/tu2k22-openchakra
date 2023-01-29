import React, { memo } from 'react'
import { Select } from '@chakra-ui/react'
import FormControl from '~components/inspector/controls/FormControl'
import { useForm } from '~hooks/useForm'
import usePropsSelector from '~hooks/usePropsSelector'

const CardPanel = () => {
  const { setValueFromEvent } = useForm()
  const variant = usePropsSelector('variant')
  const maxW = usePropsSelector('maxW')

  return (
    <>
      <FormControl htmlFor="variant" label="Variant">
        <Select
          id="variant"
          onChange={setValueFromEvent}
          name="variant"
          size="sm"
          value={variant || ''}
        >
          <option>elevated</option>
          <option>outline</option>
        </Select>
      </FormControl>
      <FormControl htmlFor="maxW" label="Max Width">
        <Select
          id="maxW"
          onChange={setValueFromEvent}
          name="maxW"
          size="sm"
          value={maxW || ''}
        >
          <option>sm</option>
          <option>2xs</option>
          <option>xs</option>
          <option>md</option>
          <option>lg</option>
          <option>xl</option>
          <option>2xl</option>
          <option>full</option>
        </Select>
      </FormControl>
    </>
  )
}

export default memo(CardPanel)
