import {MemoryRouter} from "react-router-dom";
import {render} from '@testing-library/react';
import {Provider} from "react-redux";
import AppRouter from "../../router/AppRouter";
import store from '../../redux/store';

export const renderWithRouter = (component, initialRout = '/') => {
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[initialRout]}>
                <AppRouter/>
                {component}
            </MemoryRouter>
        </Provider>
    );
};

export default renderWithRouter;