export type MenuItem = {
  children?: MenuItems
  soon?: boolean
  rootParentType?: ComponentType
}

type MenuItems = Partial<
  {
    [k in ComponentType]: MenuItem
  }
>

export const menuItems: MenuItems = {
  Accordion: {
    children: {
      Accordion: {},
      AccordionItem: {},
      AccordionButton: {},
      AccordionPanel: {},
      AccordionIcon: {},
    },
  },
  Alert: {
    children: {
      Alert: {},
      AlertDescription: {},
      AlertIcon: {},
      AlertTitle: {},
    },
  },
  AspectRatio: {},
  AvatarGroup: {
    rootParentType: 'Avatar',
  },
  Avatar: {},
  AvatarBadge: {
    rootParentType: 'Avatar',
  },
  Badge: {},
  Box: {},
  Breadcrumb: {
    children: {
      BreadcrumbItem: {},
      BreadcrumbLink: {},
    },
  },
  Button: {},
  Card: {
    children: {
      Box: {},
    },
  },
  Center: {},
  Conditional: {
    children: {
      Box: {},
    },
  },
  Container: {},
  Checkbox: {},
  CircularProgress: {},
  CloseButton: {},
  Code: {},
  Divider: {},
  Flex: {},
  FormControl: {
    children: {
      FormControl: {},
      FormLabel: {},
      FormHelperText: {},
      FormErrorMessage: {},
    },
  },
  Grid: {},
  Heading: {},
  Highlight: {},
  Icon: {},
  IconButton: {},
  Image: {},
  Input: {},
  InputGroup: {
    rootParentType: 'Input',
    children: {
      InputGroup: {},
      Input: {},
      InputLeftAddon: {},
      InputRightAddon: {},
      InputRightElement: {},
      InputLeftElement: {},
    },
  },
  Link: {},
  List: {
    children: {
      List: {},
      ListItem: {},
    },
  },
  Loop: {},
  Menu: {
    children: {
      Menu: {},
      MenuButton: {},
      MenuList: {},
      MenuItem: {},
      MenuItemOption: {},
      MenuGroup: {},
      MenuOptionGroup: {},
      MenuDivider: {},
    },
  },
  Kbd: {},
  Modal: {
    children: {
      Modal: {},
      ModalOverlay: {},
      ModalContent: {},
      ModalHeader: {},
      ModalFooter: {},
      ModalBody: {},
      ModalCloseButton: {},
    },
  },
  NumberInput: {},
  Popover: {
    children: {
      Popover: {},
      PopoverTrigger: {},
      PopoverContent: {},
      PopoverHeader: {},
      PopoverBody: {},
      PopoverFooter: {},
      PopoverArrow: {},
      PopoverCloseButton: {},
      PopoverAnchor: {},
    },
  },
  Progress: {},
  Radio: {},
  RadioGroup: {
    rootParentType: 'Radio',
  },
  SimpleGrid: {},
  Skeleton: {},
  SkeletonCircle: {},
  SkeletonText: {},
  Slider: {
    children: {
      Slider: {},
      SliderTrack: {},
      SliderFilledTrack: {},
      SliderThumb: {},
      SliderMark: {},
    },
  },
  RangeSlider: {
    children: {
      RangeSlider: {},
      RangeSliderTrack: {},
      RangeSliderFilledTrack: {},
      RangeSliderThumb: {},
    },
  },
  Spinner: {},
  Select: {},
  Stack: {},
  Stat: {
    children: {
      StatGroup: {},
      Stat: {},
      StatLabel: {},
      StatNumber: {},
      StatHelpText: {},
      StatArrow: {},
    },
  },
  Switch: {},
  Table: {
    children: {
      TableContainer: {},
      Table: {},
      TableCaption: {},
      Thead: {},
      Tbody: {},
      Tfoot: {},
      Tr: {},
      Th: {},
      Td: {},
    },
  },
  TableRow: {
    children: {},
  },
  Tabs: {
    children: {
      Tabs: {},
      Tab: {},
      TabList: {},
      TabPanel: {},
      TabPanels: {},
    },
  },
  Tag: {
    children: {
      Tag: {},
      TagLabel: {},
      TagLeftIcon: {},
      TagRightIcon: {},
      TagCloseButton: {},
    },
  },
  Text: {},
  Textarea: {},
  Tooltip: {},
}

export const componentsList: ComponentType[] = [
  'Accordion',
  'AccordionIcon',
  'AccordionItem',
  'AccordionPanel',
  'Alert',
  'AlertDescription',
  'AlertIcon',
  'AlertTitle',
  'AspectRatio',
  'Avatar',
  'AvatarBadge',
  'AvatarGroup',
  'Badge',
  'Box',
  'Breadcrumb',
  'BreadcrumbItem',
  'BreadcrumbLink',
  'Button',
  'Card',
  'Center',
  'Checkbox',
  'CircularProgress',
  'CloseButton',
  'Code',
  'Conditional',
  'Container',
  'Divider',
  'Editable',
  'Flex',
  'FormControl',
  'FormErrorMessage',
  'FormHelperText',
  'FormLabel',
  'Grid',
  'Heading',
  'Highlight',
  'Icon',
  'IconButton',
  'Image',
  'Input',
  'InputGroup',
  'InputLeftAddon',
  'InputLeftElement',
  'InputRightAddon',
  'InputRightElement',
  'Kbd',
  'Link',
  'List',
  'ListIcon',
  'ListItem',
  'Loop',
  'Menu',
  'MenuButton',
  'MenuList',
  'MenuItem',
  'MenuItemOption',
  'MenuGroup',
  'MenuOptionGroup',
  'MenuDivider',
  'Modal',
  'ModalOverlay',
  'ModalContent',
  'ModalHeader',
  'ModalFooter',
  'ModalBody',
  'ModalCloseButton',
  'NumberInput',
  'Popover',
  'PopoverTrigger',
  'PopoverContent',
  'PopoverHeader',
  'PopoverBody',
  'PopoverFooter',
  'PopoverArrow',
  'PopoverCloseButton',
  'PopoverAnchor',
  'Progress',
  'Radio',
  'RadioGroup',
  'Select',
  'SimpleGrid',
  'Spinner',
  'Skeleton',
  'SkeletonCircle',
  'SkeletonText',
  'Slider',
  'SliderTrack',
  'SliderFilledTrack',
  'SliderThumb',
  'SliderMark',
  'Stack',
  'Stat',
  'StatArrow',
  'StatGroup',
  'StatHelpText',
  'StatLabel',
  'StatNumber',
  'Switch',
  'Table',
  'Thead',
  'Tbody',
  'Tfoot',
  'Tr',
  'Th',
  'Td',
  'TableCaption',
  'TableContainer',
  'Tab',
  'TabList',
  'TabPanel',
  'TabPanels',
  'Tabs',
  'Tag',
  'TagLabel',
  'TagLeftIcon',
  'TagRightIcon',
  'TagCloseButton',
  'Text',
  'Textarea',
  'Tooltip',
  'RangeSlider',
  'RangeSliderTrack',
  'RangeSliderFilledTrack',
  'RangeSliderThumb',
]
