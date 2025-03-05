export interface ApiContext {
  params?: Record<string, string>;
}

export type ApiHandler = (
  req: Request,
  context: ApiContext,
) => Promise<Response>;

export type ApiMiddleware = (handler: ApiHandler) => ApiHandler;
