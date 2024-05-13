import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));


const publicRoutes = [
    { path: '/', Component: Home }
]

export default publicRoutes;