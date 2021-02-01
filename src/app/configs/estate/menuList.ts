import { estateMenuModel } from 'src/app/models/estate/estate-menu';

export const estateMenuList: estateMenuModel[] = [
    {
        name: 'Dashboard',
        icon: 'icon-grid',
        link: '/'
    },
    {
        name: 'Data',
        icon: 'icon-circular-graph',
        link: '/data'
    },
    {
        name: 'Listings',
        icon: 'icon-list',
        link: '/listings'
    },
    {
        name: 'Clients',
        icon: 'icon-user',
        link: '/clients'
    },
    {
        name: 'Bills',
        icon: 'icon-text-document',
        link: '/bills'
    },
    {
        name: 'Settings',
        icon: 'icon-cog',
        link: '/settings'
    },
];