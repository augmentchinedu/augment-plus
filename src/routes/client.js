const Client = () => import('../containers/Client');
const Home = () => import('../views/Client/Home');

export default {
    path: '',
    component: Client,
    redirect: '/home',
    children: [
        {
            path: '/home',
            component: Home
        }
    ]
};
