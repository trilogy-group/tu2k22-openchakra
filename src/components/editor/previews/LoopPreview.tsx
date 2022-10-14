import React from 'react'
import { Box } from '@chakra-ui/react'
import ComponentPreview from '~components/editor/ComponentPreview'
import { useDropComponent } from '~hooks/useDropComponent'
import { Button } from '@chakra-ui/react'
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

/*{props.show === 'show-both' || props.show === undefined ? (
        <>
          <Box pos="relative" ref={drop(ref)} {...props}>
            <ComponentPreview componentName={component.children[0]} />
          </Box>
          <Box pos="relative" ref={drop(ref)} {...props}>
            <ComponentPreview componentName={component.children[1]} />
          </Box>
        </>
      ) : props.show === 'show-true' ? (
        <Box pos="relative" ref={drop(ref)} {...props}>
          <ComponentPreview componentName={component.children[0]} />
        </Box>
      ) : (
        <Box pos="relative" ref={drop(ref)} {...props}>
          <ComponentPreview componentName={component.children[1]} />
        </Box>
      )}*/


/*Object.values(props.list).map(() => {
          component.children.map((key: string) => (
              <ComponentPreview key={key} componentName={key} />
          ))
      })*/


/*<Box pos="relative" ref={drop(ref)} {...props}>
      {!props.loopView ? (<>{component.children.map((key: string) => (
          <ComponentPreview key={key} componentName={key} />
      ))}</>) : (<>{props.list.map(() => {
          component.children.map((key: string) => (
              <ComponentPreview key={key} componentName={key} />
          ))
      })}</>)}
  </Box>*/