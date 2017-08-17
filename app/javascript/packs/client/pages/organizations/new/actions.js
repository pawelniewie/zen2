import {createAction} from 'redux-actions';

export const organizationNewStarted = createAction('ORGANIZATION_NEW_STARTED');
export const organizationNewFailed = createAction('ORGANIZATION_NEW_FAILED');
export const organizationNewSuccess = createAction('ORGANIZATION_NEW_SUCCESS');
