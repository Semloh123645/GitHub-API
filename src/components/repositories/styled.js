import styled from 'styled-components'
import {Tabs, TabList, Tab, TabPanel} from 'react-tabs'

export const WrapperTabs = styled(Tabs)`
font-size: 16px;
width: 50%;`

export const WrapperTabList = styled(TabList)`
list-style-type: none;
padding: 4px;
display: flex;
margin=0;`

export const WrapperTab = styled(Tab)`
border-radius: 16px;
border: 1px solid black;
padding: 8px;
user-select: none;
cursor: pointer;
`

export const WrapperTabPanel = styled(TabPanel)`
padding: 8px;
border: 1px solid black;
box-shadow: 0 0 0.2em rgba(0, 0, 0, 0.3);
`

