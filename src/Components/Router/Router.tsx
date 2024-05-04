import React = require('react');
import { useLocation, useNavigate, useParams } from 'react-router-dom';

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

export const scollToTop = (): null => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });
    }, [pathname]);
    return null;
};
