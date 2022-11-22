import { Box, Flex, HStack } from '@chakra-ui/react'
import React, { memo, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getComponents } from '~core/selectors/components'

const generateOutline = (components: any, compId: string = 'root') => {
  return (
    <Box ml={4}>
      {components[compId].type}
      {components[compId].children.map((component: any, i: number) => (
        <h6 key={i}>{generateOutline(components, component)}</h6>
      ))}
    </Box>
  )
}

const OutlineView = () => {
  const components = useSelector(getComponents)
  const [outline, setOutline] = useState(<></>)

  useEffect(() => {
    setOutline(generateOutline(components))
  }, [components])

  return outline
}

export default memo(OutlineView)
