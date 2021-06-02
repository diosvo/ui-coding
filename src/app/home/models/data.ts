import { IGroupValue } from './search.model';

const ComponentUI: Array<IGroupValue> = [
  {
    groupName: 'Button',
    groupDetails: [
      {
        name: 'Button Micro Interaction',
        route: 'micro-interaction'
      },
      {
        name: 'Button Toggle Mode',
        route: 'toggle-mode'
      },
      {
        name: 'Button Expandable Floating Menu',
        route: 'expandable-floating-menu'
      },
    ]
  },
  {
    groupName: 'Card',
    groupDetails: [
      {
        name: 'Animated Counter Card',
        route: 'animated-counter'
      },
    ]
  },
  {
    groupName: 'Menu',
    groupDetails: [
      {
        name: 'Liquid Menu Interaction',
        route: 'liquid-menu'
      },
      {
        name: 'Navbar Interaction',
        route: 'navbar'
      },
    ]
  }
];

const WebUI: Array<IGroupValue> = [
  {
    groupName: 'Slider',
    groupDetails: [
      {
        name: 'Minimal Image Reviews Interaction',
        route: 'minimal-image-reviews'
      },
    ]
  }
];

export { ComponentUI, WebUI };
