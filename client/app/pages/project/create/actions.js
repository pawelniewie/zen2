import {createAction} from 'redux-actions';
import AppError from 'app/libs/AppError';

export const createProjectCanceled = createAction('CREATE_PROJECT_CANCELED');
export const createProjectSuccess = createAction('CREATE_PROJECT_SUCCESS');