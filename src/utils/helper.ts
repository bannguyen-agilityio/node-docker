export const pluralize = (
  count: number,
  singular: string = '',
  plural: string = 's',
): string => (count === 1 ? singular : plural);
