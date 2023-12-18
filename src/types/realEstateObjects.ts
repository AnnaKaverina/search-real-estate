export interface House {
    id: number
    square: number
  }
  
export interface LandPlot {
    id: number
    square: number
}

export enum RealEstateObjectTypes {
    HOUSE,
    LANDPLOT
}

export interface RealEstateObject {
    id: string
    type: RealEstateObjectTypes
    cost: number
    shortDescription: string
    landPlot: LandPlot
    house: House
}
