import { default as OriginalTabs } from '@material-ui/core/Tabs'
import * as React from 'react'
import Tab from './tab'
import { TabsProps } from '@material-ui/core/Tabs'
import { withTheme, ThemeInterface } from '../../styled'
import { Omit } from '../../typescript'

type TrimmedMUIProps = Omit<TabsProps, 'colokr'>

type ContentType = JSX.Element | (() => JSX.Element)
type TabType = {
  label?: string
  icon?: any
  content: ContentType
}

type OurProps = TrimmedMUIProps & {
  /**
   * description: hello
   */
  theme: ThemeInterface
  value: Number
  tabs: TabType[]
}

type State = {
  value: any
}

const mapValueToMUI = (value?: any) => {
  return { value }
}

const mapTabsToMUI = (props: OurProps) => {
  const { tabs } = props
  return {
    children: tabs.map(tab => <Tab label={tab.label} icon={tab.icon} />),
  }
}

const mapPropsToMUI = (props: OurProps) => {
  return {
    ...mapThemeToMUI(props.theme),
    ...mapValueToMUI(props.value),
    ...mapTabsToMUI(props),
  }
}

const mapThemeToMUI = (_theme: ThemeInterface) => {
  return {}
}

const mapPropsToState = (props: OurProps) => {
  const { value } = props
  return {
    value,
  }
}

const extractContent = (props: OurProps, state: State) => {
  const { value } = state
  const relevantTab = props.tabs[value]
  if (relevantTab) {
    const Content = React.isValidElement(relevantTab.content)
      ? () => {
          return relevantTab.content
        }
      : relevantTab.content
    //@ts-ignore
    return <Content />
  } else {
    return <></>
  }
}

class TabsClass extends React.Component<OurProps, State> {
  constructor(props: OurProps) {
    super(props)
    this.state = mapPropsToState(props)
  }
  handleChange = (_event: any, value: any) => {
    this.setState({
      value,
    })
  }
  componentDidUpdate(prevProps: OurProps) {
    if (prevProps.value !== this.props.value) {
      this.setState(mapPropsToState(this.props))
    }
  }
  render() {
    const MUIProps = {
      ...mapPropsToMUI(this.props),
    }
    const content = extractContent(this.props, this.state)
    return (
      <>
        <OriginalTabs
          {...MUIProps}
          {...this.props}
          value={this.state.value}
          onChange={this.handleChange}
          variant="scrollable"
          scrollButtons="auto"
        />
        {content}
      </>
    )
  }
}

export const Tabs = withTheme((props: OurProps) => {
  return <TabsClass {...props} />
})

export default Tabs
