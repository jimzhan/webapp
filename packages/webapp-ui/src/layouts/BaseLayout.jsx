import React from 'react'
import { Layout } from 'antd'
import { Content, Header } from '../components'

/* eslint-disable */
export default ({ children }) => (
  <Layout>
    <Header>
Application Header
    </Header>
    <Content>
      {children}
    </Content>
  </Layout>
)
