import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import icons from '~iconsList'
import { createTheme, Fab, ThemeProvider } from '@mui/material'
import { theme as defaultChakraTheme, useTheme } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { getNewTheme } from '~core/selectors/customComponents'

interface Props {
  component: IComponent
}

const colorToHex = (color: string, theme: any) => {
  const [shade, alpha = 500] = color.split('.')
  return theme.colors[shade][alpha]
}

const FABPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)
  const themeObject = useSelector(getNewTheme)
  const currentTheme = useTheme()

  if (isOver) {
    props.bg = 'teal.50'
  }

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

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: colorToHex(themeObject.brand, currentTheme),
          },
        },
      })}
    >
      <Fab ref={ref} {...props} color="primary" />
    </ThemeProvider>
  )
}

export default FABPreview
