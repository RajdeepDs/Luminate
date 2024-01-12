/**
 * Routes that are accessible without authentication
 * @type {string[]}
 */
export const publicRoutes = ["/home"];

/**
 * Routes that are used for authentication
 * Routes that are accessible with authentication
 * @type {string[]}
 */
export const authRoutes = ["/sign-up", "/sign-in"];

/**
 * Authenticated routes
 * Routes that are accessible with authentication
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default route to redirect to after login
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
