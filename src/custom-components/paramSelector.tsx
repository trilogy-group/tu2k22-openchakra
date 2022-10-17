import React from 'react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  ListIcon,
  ListItem,
  List,
} from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { useSelector } from 'react-redux'
import { getComponentParamNames } from '~core/selectors/components'
import { MdCheckCircle } from 'react-icons/md'
import { IoMdRadioButtonOff } from 'react-icons/io'

const ParamSelector = ({ prop, setProp }: any) => {
  const params = useSelector(getComponentParamNames)
  return (
    <span>
      <Popover placement="left" trigger="hover">
        <PopoverTrigger>
          <ChevronLeftIcon />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Select parameter</PopoverHeader>
          <PopoverBody>
            <List>
              {params?.map((param: string) => (
                <ListItem
                  onClick={() => console.log(param)}
                  key={param}
                  px={1}
                  _hover={{ bg: 'teal.100' }}
                >
                  {param}
                </ListItem>
              ))}
            </List>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </span>
  )
}

export default ParamSelector