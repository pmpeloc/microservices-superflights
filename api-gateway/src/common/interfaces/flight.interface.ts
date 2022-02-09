import { IPassenger } from './passenger.interface';
import { IWeather } from './weather.interface';

export interface IFlight {
  pilot: string;
  airplane: string;
  destinationCity: string;
  flightDate: Date;
  passengers: IPassenger[];
  wather: IWeather[];
}
