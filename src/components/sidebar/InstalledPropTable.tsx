import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'
import React from 'react'

type installPropTable = {
  param: string
}

const InstalledPropTable = ({ param }: installPropTable) => {
  let paramList = JSON.parse(param)
  return (
    <TableContainer>
      <Table variant="simple" size="sm" maxWidth="max-content">
        <Thead>
          <Tr backgroundColor="#384150">
            <Th fontFamily="sans-serif">Name</Th>
            <Th fontFamily="sans-serif">Type</Th>
            <Th fontFamily="sans-serif">Description</Th>
            <Th fontFamily="sans-serif">Required</Th>
            <Th fontFamily="sans-serif">Default</Th>
          </Tr>
        </Thead>
        <Tbody>
          {paramList.map((property: Record<string, any>) => (
            <Tr key={property.name}>
              <Td>{property.name}</Td>
              <Td>{property.type}</Td>
              <Td>{property.description ? property.description : '-'}</Td>
              <Td>{property.required ? 'YES' : '-'}</Td>
              <Td>
                {property.default ? JSON.stringify(property.default) : '-'}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default InstalledPropTable
