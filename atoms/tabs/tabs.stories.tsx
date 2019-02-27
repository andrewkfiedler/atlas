import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, number } from '@storybook/addon-knobs'
import Tabs from './tabs'
import Paper from '../paper'

storiesOf('Tabs', module)
  .addDecorator(withKnobs)
  .add('playground', () => {
    const value = number('value', 0, { min: 0, max: 1, step: 1, range: true })
    return (
      <Paper>
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
          tabs={[
            {
              label: 'test',
              content: () => {
                return <div>hello2</div>
              },
            },
            { label: 'test', content: <div>hello2</div> },
            {
              label: 'test',
              content: () => {
                return <div>hello2</div>
              },
            },
            { label: 'test', content: <div>hello2</div> },
          ]}
        />
      </Paper>
    )
  })
