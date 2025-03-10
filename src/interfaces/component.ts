export type AddClassProp<T> = T extends object
  ? T & { className?: string }
  : { className?: string };
