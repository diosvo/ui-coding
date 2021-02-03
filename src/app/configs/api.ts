import { AnimatedCounterModel } from '../models/animated-counter-card';
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
    {
      id: 4,
      name: 'Animated Counter Card',
      routerLink: '/components/animated-counter-card'
    },
    {
      id: 5,
      name: 'Momentum Scrolling',
      routerLink: '/components/momentum-scrolling'
    },
    {
      id: 6,
      name: 'Button Micro-Interaction',
      routerLink: '/all-thing-about/button/micro-interaction'
    },
    {
      id: 6,
      name: 'Real Estate',
      routerLink: '/web-app/estate'
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

  public static animatedCardList: AnimatedCounterModel[] = [
    {
      title: 'Total Orders',
      color: 'lightpurple',
      amount: 69,
      percent: 99,
      icon: 'icon-shop',
    },
    {
      title: 'Total Views',
      color: 'lightgrey',
      amount: 12.12,
      percent: 69.96,
      icon: 'icon-shopping-cart',
    },
    {
      title: 'Conversation Rate',
      color: 'lightgreen',
      amount: 269,
      percent: 12.7,
      icon: 'icon-bar-graph',
    },
    {
      title: 'Avg Orders',
      color: 'lightorange',
      amount: 321,
      percent: 12.9,
      icon: 'icon-calendar',
    },
  ];
}