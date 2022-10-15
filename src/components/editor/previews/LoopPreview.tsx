import React from 'react'
import { Box } from '@chakra-ui/react'
import ComponentPreview from '~components/editor/ComponentPreview'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'

const LoopPreview: React.FC<{ component: IComponent }> = ({
  component,
}) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <Box pos="relative" ref={drop(ref)} {...props}>
      {props.loopView ? <>{props.list.map(() => component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      )))}</> : <>{component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}</>}
    </Box>
  )
}

export default LoopPreview