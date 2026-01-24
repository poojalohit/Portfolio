declare module 'react-simple-maps' {
  import { ComponentType, ReactNode } from 'react'

  export interface Geography {
    rsmKey: string
    properties: {
      NAME: string
      [key: string]: any
    }
    [key: string]: any
  }

  export interface GeographiesProps {
    geography?: string | object
    children?: (props: { geographies: Geography[] }) => ReactNode
  }

  export interface GeographyProps {
    geography: Geography
    [key: string]: any
  }

  export interface MarkerProps {
    coordinates: [number, number]
    children?: ReactNode
    [key: string]: any
  }

  export interface ComposableMapProps {
    projectionConfig?: {
      scale?: number
      center?: [number, number]
      [key: string]: any
    }
    className?: string
    [key: string]: any
  }

  export const ComposableMap: ComponentType<ComposableMapProps>
  export const Geographies: ComponentType<GeographiesProps>
  export const Geography: ComponentType<GeographyProps>
  export const Marker: ComponentType<MarkerProps>
}
