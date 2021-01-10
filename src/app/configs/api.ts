import { CarouselModel } from '../models/dynamic-carousel';

export abstract class Configs {
  public static listData = [
    {
      id: 1,
      name: 'Navbar Interaction',
      routerLink: '/components/navbar'
    },
    {
      id: 2,
      name: 'Liquid Menu Interaction',
      routerLink: '/components/liquid-menu'
    },
    {
      id: 3,
      name: 'Dynamic Stacked Carousel Gallery',
      routerLink: '/components/dynamic-carousel'
    },
  ]

  public static navList = [
    {
      title: 'Home',
      icon: 'icon-home',
    },
    {
      title: 'Search',
      icon: 'icon-magnifying-glass',
    },
    {
      title: 'Like',
      icon: 'icon-heart-outlined',
    },
    {
      title: 'Profile',
      icon: 'icon-user',
    },
  ];

  public static carouselList: CarouselModel[] = [
    {
      title: 'ManUtd - Catona #7',
      url: '../assets/images/carousel/catona.jpg',
    },
    {
      title: 'Doctor Strange',
      url: '../assets/images/carousel/doctor-strange.jpg',
    },
    {
      title: 'Dwyane Wade',
      url: '../assets/images/carousel/dw.jpg',
    },
    {
      title: 'King Eric Catona',
      url: '../assets/images/carousel/eric.jpg',
    },
    {
      title: 'Paul Scholes #18',
      url: '../assets/images/carousel/scholes.jpg',
    },
    {
      title: 'Miami Heat - Wade #3',
      url: '../assets/images/carousel/wade.jpg',
    },
    {
      title: 'White Chocolate - Jason William #55',
      url: '../assets/images/carousel/william.jpg',
    },
  ];
}