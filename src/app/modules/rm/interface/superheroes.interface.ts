export interface ISP {
  squadName: any
  homeTown: any
  formed: number
  secretBase: any
  active: secret
  members: any
  name:string
  age:number
  secretIdentity:string
  powers: string[]
}

export enum secret {
  true = 'Si',
  false = 'No'
}

