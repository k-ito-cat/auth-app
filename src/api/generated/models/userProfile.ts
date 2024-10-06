/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Authentication API
 * API specification for authentication mechanisms using React frontend and Express or Hono backend. Supports user registration with automatic login, email verification, login, password reset, account deletion, logout, and other common authentication functionalities. **Note:** In development and testing environments, API responses are mocked with a 3-second delay using Mock Service Worker (MSW).

 * OpenAPI spec version: 1.1.0
 */

export interface UserProfile {
  /** Account creation timestamp. */
  createdAt?: string;
  /** Email address of the user. */
  email?: string;
  /** Unique identifier for the user. */
  id?: string;
  /** Last profile update timestamp. */
  updatedAt?: string;
  /** Username of the user. */
  username?: string;
}
