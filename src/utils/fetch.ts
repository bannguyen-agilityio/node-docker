export const delayResponse = async <T>(
  response: T,
  timeout: number = 5,
): Promise<T> => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(response), 1000 * timeout),
  );
};
