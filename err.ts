import React from 'react'


export interface Window {
  hljs: any
}

export interface ErrRendererProps {
  data: ErrGenericData
  style: ErrGenericData
  classNames: ErrGenericData
  config: ErrConfig
}

export interface ErrOutputData {
  blocks: ErrBlock[]
  time?: number
  version?: string
}

export interface ErrBlock {
  type: string
  data: ErrGenericData
}

export interface ErrGenericData {
  [key: string]: any
}

export interface ErrOutputProps {
  data: ErrOutputData
  style?: ErrOutputStyle
  classNames?: ErrOutputClassNames
  config?: ErrOutputConfig
  renderers: ErrOutputRenderers
}

export interface ErrConfig {
  disableDefaultStyle: boolean
}

export interface ErrOutputConfig {
  checklist?: ErrConfig
  codeBox?: ErrConfig
  delimiter?: ErrConfig
  embed?: ErrConfig
  header?: ErrConfig
  image?: ErrConfig
  list?: ErrConfig
  paragraph?: ErrConfig
  quote?: ErrConfig
  table?: ErrConfig
  video?: ErrConfig
  warning?: ErrConfig
  linktool?: ErrConfig
  personality?: ErrConfig
}

export interface ErrOutputClassNames {
  checklist?: string
  codeBox?: string
  delimiter?: string
  embed?: string
  header?: string
  image?: string
  list?: string
  paragraph?: string
  quote?: string
  table?: string
  video?: string
  warning?: string
  linktool?: string
  personality?: string
}

export interface ErrOutputStyle {
  checklist?: ErrGenericData
  codeBox?: ErrGenericData
  delimiter?: ErrGenericData
  embed?: ErrGenericData
  header?: ErrGenericData
  image?: ErrGenericData
  list?: ErrGenericData
  paragraph?: ErrGenericData
  quote?: ErrGenericData
  table?: ErrGenericData
  video?: ErrGenericData
  warning?: ErrGenericData
  linktool?: ErrGenericData
  personality?: ErrGenericData
}

export interface ErrOutputRenderers {
  checklist?: React.ReactNode
  codeBox?: React.ReactNode
  delimiter?: React.ReactNode
  embed?: React.ReactNode
  header?: React.ReactNode
  image?: React.ReactNode
  list?: React.ReactNode
  paragraph?: React.ReactNode
  quote?: React.ReactNode
  table?: React.ReactNode
  video?: React.ReactNode
  warning?: React.ReactNode
  linktool?: React.ReactNode
  personality?: React.ReactNode
}


export {};
