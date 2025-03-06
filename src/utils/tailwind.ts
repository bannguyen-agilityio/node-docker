import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

export const tw = (...args: classNames.ArgumentArray) =>
  twMerge(classNames(args));
