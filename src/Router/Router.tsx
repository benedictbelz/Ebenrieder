import React = require('react');
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Error from '../Pages/Error/Error';
import { Browser } from '../@types/browser';

export interface PropsWithRouter {
    router: {
        location: ReturnType<typeof useLocation>;
        navigate: ReturnType<typeof useNavigate>;
        params: ReturnType<typeof useParams>;
    };
}

export const withRouter = <T extends PropsWithRouter>(Component: React.ComponentType<T>): React.ComponentType<Omit<T, 'router'>> => {
    return (props: T) => {
        const location = useLocation();
        const navigate = useNavigate();
        const params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    };
};

export const Wrapper = ({ browser, children, handlePage }: { browser: Browser; children: React.ReactNode; handlePage: () => void }) => {
    const location = useLocation();
    React.useLayoutEffect(() => {
        document.documentElement.scrollTo(0, 0);
        handlePage();
    }, [location.pathname]);
    return (
        <Error key={location.pathname} browser={browser}>
            {children}
        </Error>
    );
};
