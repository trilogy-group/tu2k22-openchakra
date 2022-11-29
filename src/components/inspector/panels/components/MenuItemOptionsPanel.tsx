import React, { memo } from 'react'
import TextControl from '~components/inspector/controls/TextControl'
import ChildrenControl from '~components/inspector/controls/ChildrenControl'

const MenuItemOptionsPanel = () => {

  return (
    <>
      <TextControl name="value" label="Value" />
      <ChildrenControl />
    </>
  )
}

export default memo(MenuItemOptionsPanel)