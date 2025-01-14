import { AddIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  Text,
  Tooltip,
  useDisclosure,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import API from '~custom-components/api'
import useDispatch from '~hooks/useDispatch'

const regex = /^[a-z][a-z0-9-_$!/]*$/

const AddComponent = () => {
  const ref = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const componentValid = (
    componentPath: string | undefined = ref.current?.value,
  ) => {
    if (componentPath === undefined || componentPath.length === 0) return false
    return componentPath
      .split('/')
      .reduce((acc, word) => acc && regex.test(word), true)
  }

  const createComponent = async () => {
    const component = ref.current?.value
    if (!componentValid(component)) return
    onClose()
    dispatch.app.toggleLoader()
    const res = await API.post('/add-component', {
      path: component,
    })
    dispatch.customComponents.addCustomComponent(
      component ?? '',
      `../remote/${res.data}`,
    )
    dispatch.app.toggleLoader()
  }

  return (
    <Popover
      initialFocusRef={ref}
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      placement="right"
    >
      <PopoverTrigger>
        <Button
          bgColor="teal.500"
          _hover={{ bgColor: 'teal.300' }}
          color="white"
          leftIcon={<AddIcon />}
        >
          <Tooltip
            label="Create a new custom component"
            fontFamily="sans-serif"
            fontSize="sm"
            hasArrow
            placement="bottom"
          >
            <Text letterSpacing="wide" fontSize="sm" textTransform="capitalize">
              Create
            </Text>
          </Tooltip>
        </Button>
      </PopoverTrigger>
      <PopoverContent p={5} bgColor="white" color="black">
        <PopoverArrow bgColor="white" />
        <PopoverCloseButton />
        <PopoverBody>
          <FormControl isRequired isInvalid={!componentValid()}>
            <FormLabel fontWeight="bold">Component Name</FormLabel>
            <Input
              outlineColor="teal"
              ref={ref}
              placeholder="<component-name>"
              _placeholder={{ color: 'gray.400' }}
              size="sm"
            />
            <FormErrorMessage>
              component names can only contain alphanumeric, lowercase
              characters, and the following [-, _, $, !, /]
            </FormErrorMessage>
          </FormControl>
        </PopoverBody>
        <PopoverFooter display="flex" justifyContent="flex-end">
          <Button
            colorScheme="teal"
            color="teal.500"
            variant="outline"
            onClick={() => {
              createComponent()
            }}
          >
            Create
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  )
}

export default AddComponent
