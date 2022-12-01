import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import ComponentPreview from '~components/editor/ComponentPreview'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  IconButton,
} from '@chakra-ui/react'
import icons from '~iconsList'

interface Props {
  component: IComponent
}

const MenuPreview = ({ component }: Props) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)
  let prop = { ...props }
  delete prop['isOpen']

  if (isOver) {
    props.bg = 'teal.50'
  }
  return (
    <Menu ref={drop(ref)} isOpen={props.showpreview} {...prop}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </Menu>
  )
}

export const MenuButtonPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const {
    props: { icon, ...props },
    ref,
  } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  let prop = { ...props }
  delete prop['as']

  if (props.leftIcon) {
    if (Object.keys(icons).includes(props.leftIcon)) {
      const Icon = icons[props.leftIcon as keyof typeof icons]
      props.leftIcon = <Icon path="" />
    } else {
      props.leftIcon = undefined
    }
  }

  if (props.rightIcon) {
    if (Object.keys(icons).includes(props.rightIcon)) {
      const Icon = icons[props.rightIcon as keyof typeof icons]
      props.rightIcon = <Icon path="" />
    } else {
      props.rightIcon = undefined
    }
  }

  if (icon) {
    if (Object.keys(icons).includes(icon)) {
      const Icon = icons[icon as keyof typeof icons]
      props.icon = <Icon path="" />
    } else {
      props.icon = undefined
    }
  }

  return (
    <MenuButton ref={ref} {...props}>
      {props.as === 'Button' ? (
        <Button ref={ref} {...prop} />
      ) : (
        <IconButton ref={ref} {...prop} />
      )}
    </MenuButton>
  )
}

export const MenuListPreview = ({ component }: Props) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <MenuList ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </MenuList>
  )
}

export const MenuGroupPreview = ({ component }: Props) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <MenuGroup ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </MenuGroup>
  )
}

export const MenuOptionGroupPreview = ({ component }: Props) => {
  const { drop, isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return (
    <MenuGroup ref={drop(ref)} {...props}>
      {component.children.map((key: string) => (
        <ComponentPreview key={key} componentName={key} />
      ))}
    </MenuGroup>
  )
}

export const MenuItemPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return <MenuItem ref={ref} {...props} />
}

export const MenuItemOptionPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return <MenuItemOption ref={ref} {...props} />
}

export const MenuDividerPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  if (isOver) {
    props.bg = 'teal.50'
  }

  return <MenuDivider ref={ref} {...props} />
}

export default MenuPreview