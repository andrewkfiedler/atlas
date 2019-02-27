import * as React from 'react'
import { default as OriginalPaper } from '@material-ui/core/Paper'
import { PaperProps } from '@material-ui/core/Paper'

export const Paper = (props: PaperProps) => {
  return <OriginalPaper {...props} />
}

export default Paper
