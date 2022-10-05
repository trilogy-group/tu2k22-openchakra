import { ChangeEvent, useCallback } from 'react'
import { useSelector } from 'react-redux'
import useDispatch from './useDispatch'
import { getSelectedComponentId } from '~core/selectors/components'

export const useParamsForm = () => {
  const dispatch = useDispatch()
  const componentId = useSelector(getSelectedComponentId)

  const setValue = useCallback(
    (name: string, value: any, type: any) => {
      dispatch.components.updateParams({
        id: componentId,
        name,
        value,
        type,
      })
    },
    [componentId, dispatch.components],
  )

  return { setValue }
}