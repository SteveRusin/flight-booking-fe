export interface RoutesQuery {
  limit: number;
  offset: number;
}

export interface Route {
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
  data: Route[];
}
