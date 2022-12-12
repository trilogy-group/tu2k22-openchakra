import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import ComponentPreview from '~components/editor/ComponentPreview'
import { Box } from '@chakra-ui/react'

interface Props {
  component: IComponent
}

const CardPreview = ({ component }: Props) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }
  if (props.variant === 'outline') {
    props.border = '1px'
    props.borderColor = 'blackAlpha.200'
  } else {
    props.boxShadow = 'lg'
  }

  return (
    <Box ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </Box>
  )
}

export default CardPreview
