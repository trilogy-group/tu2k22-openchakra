import React from 'react'
import { useDropComponent } from '~hooks/useDropComponent'
import { useInteractive } from '~hooks/useInteractive'
import { createTheme, ThemeProvider } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useTheme } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { getNewTheme } from '~core/selectors/customComponents'

interface Props {
  component: IComponent
}

const colorToHex = (color: string, theme: any) => {
  const [shade, alpha = 500] = color.split('.')
  return theme.colors[shade][alpha]
}

const kebabCaseToSpacedPascal = (fontFamily: string) => {
  return fontFamily
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(' ')
}

const DataGridPreview = ({ component }: Props) => {
  const { isOver } = useDropComponent(component.id)
  const { props, ref } = useInteractive(component, true)

  const themeObject = useSelector(getNewTheme)
  const currentTheme = useTheme()

  if (isOver) {
    props.bg = 'teal.50'
  }

  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ]

  const columns = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
  ]

  if (!props.rows) props.rows = rows
  if (!props.columns) props.columns = columns
  console.log(themeObject.bodyFontFamily)

  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          primary: {
            main: colorToHex(themeObject.brand, currentTheme),
          },
        },
        typography: {
          fontFamily: kebabCaseToSpacedPascal(themeObject.bodyFontFamily),
        },
      })}
    >
      <DataGrid ref={ref} {...props} />
    </ThemeProvider>
  )
}

export default DataGridPreview
