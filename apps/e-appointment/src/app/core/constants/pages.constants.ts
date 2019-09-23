import { Pages, PagesTypes } from '../interfaces/pages.interfaces';

export const PAGES: Pages = {
    [PagesTypes.LOGIN]: {
        url: 'login'
    },
    [PagesTypes.REGISTER]: {
        url: 'register'
    },
    [PagesTypes.FORGOT_PASSWORD]: {
        url: 'forgot-password'
    }
};
