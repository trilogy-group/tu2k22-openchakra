import React from 'react'
import { Box } from '@chakra-ui/react'
import ComponentPreview from '~components/editor/ComponentPreview'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'

const LoopPreview: React.FC<{ component: IComponent }> = ({ component }) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)
  if (isOver) {
    props.bg = 'teal.50'
  }
  const loopArray: number[] = []
  const loopLength = Number(props.loopNumber)

  const getArray = (length: number) => {
    for (let i = 1; i <= length; i++) {
      loopArray.push(i)
    }
  }

  if (loopLength && loopLength > 0) {
    getArray(loopLength)
  }

  return (
    <Box pos="relative" ref={drop(ref)} {...props}>
      {!props.loopView ? (
        <>
          {component.children.map((key: string) => (
            <ComponentPreview key={key} componentName={key} />
          ))}
        </>
      ) : loopLength && loopLength > 0 ? (
        <>
          {loopArray.map(() =>
            component.children.map((key: string) => (
              <ComponentPreview key={key} componentName={key} />
            )),
          )}
        </>
      ) : (
        <>
          {[1, 2, 3, 4].map(() =>
            component.children.map((key: string) => (
              <ComponentPreview key={key} componentName={key} />
            )),
          )}
        </>
      )}
    </Box>
  )
}

export default LoopPreview
