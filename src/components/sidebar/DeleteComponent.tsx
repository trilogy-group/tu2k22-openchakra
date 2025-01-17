import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  IconButton,
  useDisclosure,
  Tag,
  TagLeftIcon,
  TagLabel,
  Text,
  Box,
} from '@chakra-ui/react'
import { WarningTwoIcon } from '@chakra-ui/icons'
import React, { useRef, useState } from 'react'
import API from '~custom-components/api'
import useDispatch from '~hooks/useDispatch'
import { useSelector } from 'react-redux'
import {
  getCustomComponents,
  getInstalledComponents,
  getSelectedCustomComponentId,
} from '~core/selectors/customComponents'
import { DeleteIcon } from '@chakra-ui/icons'

const DeleteComponent = ({
  name,
  isInstalled = false,
}: {
  name: string
  isInstalled?: boolean
}) => {
  const selectedComponent = useSelector(getSelectedCustomComponentId)
  const customComponents = useSelector(getCustomComponents)
  const installedComponents = useSelector(getInstalledComponents)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const dispatch = useDispatch()
  const cancelRef = useRef<any>(null)

  const handleDeleteClick = async () => {
    dispatch.app.toggleLoader()
    if (isInstalled) {
      dispatch.customComponents.updateInstalledComponents(name, false)
      await API.post('/uninstall-component', {
        path: installedComponents[name],
      })
    } else {
      dispatch.customComponents.deleteCustomComponent(name)
      await API.post('/delete-component', {
        path: customComponents[name],
      })
    }
    dispatch.app.toggleLoader()
  }

  const [list, setList] = useState([])

  const getParameters = async (name: string) => {
    const res = await API.post('/safe-deletion', {
      componentDelete: name,
      customCmp: customComponents,
    })
    setList(res.data['listUsed'])
  }

  return (
    <>
      <IconButton
        aria-label="Delete"
        onClick={() => {
          onOpen()
          getParameters(name)
        }}
        disabled={name === selectedComponent}
      >
        <DeleteIcon color="red" />
      </IconButton>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            bgColor="white"
            fontFamily="sans-serif"
            color="black"
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Component
            </AlertDialogHeader>

            <AlertDialogBody>
              {list.length ? (
                <Box>
                  <Text>
                    Remove it from the following components before deleting:
                  </Text>
                  {list.map((property: string) => (
                    <Tag
                      key={property}
                      rounded="full"
                      variant="solid"
                      backgroundColor="#2F918F"
                      p={3}
                      m={1}
                    >
                      <TagLeftIcon as={WarningTwoIcon} />
                      <TagLabel>{property}</TagLabel>
                    </Tag>
                  ))}
                </Box>
              ) : (
                <Text>
                  Are you sure? You cannot undo this action afterwards.
                </Text>
              )}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} color="teal.300">
                Cancel
              </Button>
              {!list.length && (
                <Button
                  color="red"
                  onClick={() => {
                    handleDeleteClick()
                    onClose()
                  }}
                  ml={3}
                >
                  Delete
                </Button>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default DeleteComponent
