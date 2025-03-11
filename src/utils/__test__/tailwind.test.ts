// Utils
import { tw } from '../tailwind';

describe('tw utility function', () => {
  test('should merge class names correctly', () => {
    expect(tw('text-red-500', 'font-bold')).toBe('text-red-500 font-bold');
  });

  test('should override conflicting Tailwind classes', () => {
    expect(tw('text-red-500', 'text-blue-500')).toBe('text-blue-500'); // Last one wins
  });

  test('should handle conditional class names', () => {
    expect(
      tw(
        'p-4',
        {
          hidden: false,
        },
        'm-2',
      ),
    ).toBe('p-4 m-2');
  });

  test('should handle undefined or null values gracefully', () => {
    expect(tw(undefined, 'block', null, 'px-4')).toBe('block px-4');
  });

  test('should remove duplicate class names', () => {
    expect(tw('text-center', 'text-center')).toBe('text-center');
  });

  test('should return an empty string when no valid classes are provided', () => {
    expect(tw()).toBe('');
  });
});
