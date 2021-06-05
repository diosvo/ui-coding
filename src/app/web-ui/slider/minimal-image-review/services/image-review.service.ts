import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IData } from '../models/data.interface';

const data: Array<IData> = [
  {
    id: 1,
    name: 'Donny Jiang',
    category: 'Architecture',
    description: 'Minneapolis, MN, USA',
    url:
      'https://images.unsplash.com/photo-1583430999185-4c19b0c9636a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 2,
    name: 'Francesco Ungaro',
    category: 'Architecture',
    description: 'Mudec museum of culture, Milano, Italy',
    url:
      'https://images.unsplash.com/photo-1534320309096-17ce1f77021d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2158&q=80',
  },
  {
    id: 3,
    name: 'Dorien Monnens',
    category: 'Architecture',
    description: 'Glasgow botanical garden',
    url:
      'https://images.unsplash.com/photo-1597077864840-44f0d85011a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 4,
    name: 'Mehmet Turgut Kirkgoz',
    category: 'Architecture',
    description: 'Vatican Museums, Vatikan',
    url:
      'https://images.unsplash.com/photo-1596432150438-3ef028cca147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1867&q=80',
  },
  {
    id: 5,
    name: 'Clarisse Croset',
    category: 'Architecture',
    description: 'Paris, France',
    url:
      'https://images.unsplash.com/photo-1597176924237-b228b1153c7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 6,
    name: 'Dylan Leagh',
    category: 'Architecture',
    description: 'Amsterdam',
    url:
      'https://images.unsplash.com/photo-1596188773105-3bdfcf453495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1439&q=80',
  },
  {
    id: 7,
    name: 'Thomas de LUZE',
    category: 'Architecture',
    description: 'Slovénie, Slovénie',
    url:
      'https://images.unsplash.com/photo-1596208091591-fc5c2f4a1022?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 8,
    name: 'Nick Samoylov',
    category: 'Architecture',
    description:
      'Dortheavej Residence BIG, Dortheavej, Copenhagen Municipality, Denmark',
    url:
      'https://images.unsplash.com/photo-1596572133110-277ff81c8b5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
  },
  {
    id: 9,
    name: 'Max Titov',
    category: 'Architecture',
    description: 'Moscow City',
    url:
      'https://images.unsplash.com/photo-1596513808047-b8c8d0cfd363?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },
  {
    id: 10,
    name: 'Duncan Meyer',
    description: 'Hillcrest, South Africa',
    category: 'Architecture',
    url:
      'https://images.unsplash.com/photo-1579850996789-3537c09dc873?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
  },
  {
    id: 11,
    name: 'Andrea Ferrario',
    category: 'Architecture',
    description: 'Milano, Italia',
    url:
      'https://images.unsplash.com/photo-1556804608-fdecc1e43e84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 12,
    name: 'Franck V',
    description: 'Intricate',
    category: 'Architecture',
    url:
      'https://images.unsplash.com/photo-1590324579681-f74246a29f78?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=939&q=80',
  },
  {
    id: 13,
    name: 'Eugene Lim',
    category: 'Architecture',
    description: 'Hong Kong Island, Hong Kong',
    url:
      'https://images.unsplash.com/photo-1497582114636-bea95b4c8f53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
  },

  {
    id: 14,
    name: 'Zheni Yaneva',
    category: 'Architecture',
    description: 'Canary Wharf, London, UK',
    url:
      'https://images.unsplash.com/photo-1596953814369-a2cde05939e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80',
  },
  {
    id: 15,
    name: 'Jonathan Kemper',
    category: 'Architecture',
    description: 'Bonn, Deutschland',
    url:
      'https://images.unsplash.com/photo-1597132708057-f7f57aefd651?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
  },
];

@Injectable({
  providedIn: 'root'
})

export class ImageReviewService {
  all(): Observable<Array<IData>> {
    return new Observable((observer) => observer.next(data));
  }

  byId(id: number): Observable<IData> {
    return new Observable((observer) =>
      observer.next(data.find((item) => item.id === id))
    );
  }
}
