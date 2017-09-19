export const multiply = (a, b) => a * b;
export const log = (...args) => console.log(...args);

if (process.env.NODE_ENV !== 'production') {
  log('this is dev', process.env.NODE_ENV);
}

if (process.env.NODE_ENV === 'development') {
  log('only in dev', process.env.NODE_ENV);
}

log('this is =>', process.env.NODE_ENV);