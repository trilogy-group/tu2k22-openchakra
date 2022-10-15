import React, { memo } from 'react'
import SwitchControl from '~components/inspector/controls/SwitchControl'
import TextControl from '~components/inspector/controls/TextControl'

const LoopPanel = () => {
    return (<>
        <SwitchControl label="Looped View" name="loopView" />
        <TextControl name="list" label="list" />
    </>)
}

export default memo(LoopPanel)