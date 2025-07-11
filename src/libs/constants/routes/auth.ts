import { API_VERSION } from '@/configs/api-version.config';

export const AUTH_ROUTE = {
  LOGIN: {
    ROUTE_HANDLER_PATH: '/api/auth/login',
    SERVER_PATH: `/api/${API_VERSION}/auth/login`
  },
  LOGOUT: {
    ROUTE_HANDLER_PATH: '/api/auth/logout',
    SERVER_PATH: `/api/${API_VERSION}/auth/logout`
  },
  REGISTER: {
    ROUTE_HANDLER_PATH: '/api/auth/register',
    SERVER_PATH: `/api/${API_VERSION}/auth/register`
  },
  VERIFY_EMAIL: {
    ROUTE_HANDLER_PATH: '/api/auth/verify-email',
    SERVER_PATH: `/api/${API_VERSION}/auth/verify-email`
  },
  SEND_VERIFICATION_CODE: {
    ROUTE_HANDLER_PATH: '/api/auth/send-verification-code',
    SERVER_PATH: `/api/${API_VERSION}/auth/send-verification-code`
  }
};
