import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import icons from '~iconsList'
import { Chip, createTheme, ThemeProvider } from '@mui/material'
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

const ChipPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)
  const themeObject = useSelector(getNewTheme)
  const currentTheme = useTheme()

  if (isOver) {
    props.bg = 'teal.50'
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
      <Chip ref={ref} {...props} color="primary" />
    </ThemeProvider>
  )
}

export default ChipPreview
