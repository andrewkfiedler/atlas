import * as React from 'react'
import { default as OriginalTab } from '@material-ui/core/Tab'
import { TabProps } from '@material-ui/core/Tab'

export const Tab = (props: TabProps) => {
  return <OriginalTab {...props} />
}
export default Tab
