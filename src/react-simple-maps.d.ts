declare module 'react-simple-maps' {
  import * as React from 'react'

  export interface Geography {
    rsmKey: string
    properties: {
      NAME: string
      [key: string]: unknown
    }
    [key: string]: unknown
  }

  export interface GeographiesProps {
    geography?: string | object
    children?: (props: { geographies: Geography[] }) => React.ReactNode
  }

  export interface GeographyProps {
    geography: Geography
    fill?: string
    stroke?: string
    strokeWidth?: number
    style?: {
      default?: React.CSSProperties
      hover?: React.CSSProperties
      pressed?: React.CSSProperties
    }
    [key: string]: unknown
  }

  export interface MarkerProps {
    coordinates: [number, number]
    children?: React.ReactNode
    [key: string]: unknown
  }

  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number
      center?: [number, number]
      [key: string]: unknown
    }
    className?: string
    [key: string]: unknown
  }

  export const ComposableMap: React.ComponentType<ComposableMapProps>
  export const Geographies: React.ComponentType<GeographiesProps>
  export const Geography: React.ComponentType<GeographyProps>
  export const Marker: React.ComponentType<MarkerProps>
}
