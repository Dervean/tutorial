// Type imports
import { LOCATION } from './LOCATION'

// Registry Entry
export interface DynaRegistry {
   LOCATION: LOCATION
}
export type DynaResourceType<T extends keyof DynaRegistry> = DynaRegistry[T]

// Type Exports
export * from './LOCATION'