import Description from './partials/_description';
import Header from './partials/_header';
import Links from './partials/_link';
import ProductsItem from './partials/_products';
import Profile from './partials/_profile';

export default function Home() {
    return (
        <div className='overflow-hidden rounded-none border bg-card text-card-foreground shadow sm:my-20 sm:rounded-xl'>
            <Header />
            <Profile />
            <Description />
            <ProductsItem />
            <Links />
        </div>
    );
}
