export interface ApiRoutesQuery {
  limit: number;
  offset: number;
}

export interface ApiRoute {
  id: number;
  airline: string;
  sourceAirport: string;
  destinationAirport: string;
  codeShare: string;
  stops: number;
  equipment?: string;
}

export interface RouteDto {
  count: number;
  data: ApiRoute[];
}
