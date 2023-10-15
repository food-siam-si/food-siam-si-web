import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
export interface HandleErrorConfig {
  overrideMessage?: Record<string, string>;
  throwError?: boolean;
}

/**
 * This is a decorator for handling API error. If the error is from `axios` and have `response` field, it will handle error according to error code (specified below), otherwise it will redirect to `/500` page
 *
 * 400 — show `Bad Request` toast
 *
 * 401 — redirect to `/login`
 *
 * 403 — redirect to `/`
 *
 * 404 — redirect to `/404`
 *
 * 409 — show `Conflict` toast
 *
 * You can override error handling behavior of each error code to show custom toast message by specifying it in `overrideMessage` parameter.
 *
 * You can also specified whether you want it to throw error after handling or not.
 *
 * @example
 * `@handleError({ 401: 'You are not authorized to access this page' }, true)`
 *
 *
 * @param overrideMessage - overriding default behavior by showing toast message in the format of { [key: errorCode ]: message }
 * @param throwError - determine that this function will throw error or not
 */
export function handleError({ overrideMessage, throwError }: HandleErrorConfig) {
  return function (_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = async function (...args: unknown[]) {
      try {
        const result = await originalMethod.apply(this, args);
        return result;
      } catch (error) {
        if (error instanceof AxiosError) {
          if (error.response) {
            handleResponseError(error, overrideMessage);
          } else if (error.request) {
            console.log(error.request);
            window.location.replace('/500');
          }
        } else {
          console.log((error as Error).message);
          window.location.replace('/500');
        }

        if (throwError) throw error;
        return null;
      }
    };

    return descriptor;
  };
}

const REDIRECT_PATH: { [key: string]: string } = {
  401: '/login',
  403: '/',
  404: '/404',
};

const ERROR_MESSAGE: { [key: string]: string } = {
  400: 'Bad Request',
  409: 'Conflict: resource already exists',
};

const handleResponseError = (error: AxiosError, overrideMessage?: { [key: string]: string }) => {
  const { data, status } = error.response!;
  if (overrideMessage?.[status]) {
    toast.error(overrideMessage?.[status]);
  } else if (ERROR_MESSAGE[status]) {
    toast.error(ERROR_MESSAGE[status]);
  } else if (REDIRECT_PATH[status]) {
    window.location.replace(REDIRECT_PATH[status]);
  } else {
    window.location.replace('/500');
  }
  console.log(`${status}: ${JSON.stringify(data)}`);
};
