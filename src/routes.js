import React from 'react';

const DetailShip = React.lazy(() => import('./components/ListStarship/DetailShip'));

const routes = [
    { path: '/', exact: true, name: 'Home' },
    { path: '/starships/:id', exact: true, name: 'Detail Ship', component: DetailShip },
];

export default routes;