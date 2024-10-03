/**
 * Generated by orval v7.1.1 🍺
 * Do not edit manually.
 * Authentication API
 * API specification for authentication mechanisms using React frontend and Express or Hono backend. Supports user registration, email verification, login, password reset, account deletion, logout, and other common authentication functionalities.

 * OpenAPI spec version: 1.1.0
 */
import {
  z as zod
} from 'zod'


/**
 * Register a new user account. Sends a verification email upon successful registration.
 * @summary User Registration
 */
export const postAuthRegisterBodyUsernameMin = 3;

export const postAuthRegisterBodyUsernameMax = 30;
export const postAuthRegisterBodyPasswordMin = 8;

export const postAuthRegisterBodyPasswordMax = 30;


export const postAuthRegisterBody = zod.object({
  "username": zod.string().min(postAuthRegisterBodyUsernameMin).max(postAuthRegisterBodyUsernameMax),
  "email": zod.string().email(),
  "password": zod.string().min(postAuthRegisterBodyPasswordMin).max(postAuthRegisterBodyPasswordMax)
})


/**
 * Verify user's email address using a token sent via email.
 * @summary Verify Email
 */
export const getAuthVerifyEmailQueryParams = zod.object({
  "token": zod.string()
})

export const getAuthVerifyEmailResponse = zod.object({
  "message": zod.string().optional()
})


/**
 * Authenticate a user and issue a JWT token.
 * @summary User Login
 */
export const postAuthLoginBodyPasswordMin = 8;

export const postAuthLoginBodyPasswordMax = 30;


export const postAuthLoginBody = zod.object({
  "email": zod.string().email(),
  "password": zod.string().min(postAuthLoginBodyPasswordMin).max(postAuthLoginBodyPasswordMax)
})

export const postAuthLoginResponse = zod.object({
  "accessToken": zod.string().optional(),
  "refreshToken": zod.string().optional(),
  "expiresIn": zod.number().optional(),
  "userId": zod.string().optional(),
  "username": zod.string().optional()
})


/**
 * Invalidate the user's JWT token.
 * @summary User Logout
 */
export const postAuthLogoutResponse = zod.object({
  "message": zod.string().optional()
})


/**
 * Request a password reset email.
 * @summary Password Reset Request
 */
export const postAuthPasswordResetRequestBody = zod.object({
  "email": zod.string().email()
})

export const postAuthPasswordResetRequestResponse = zod.object({
  "message": zod.string().optional()
})


/**
 * Reset the user's password using a reset token.
 * @summary Password Reset
 */
export const postAuthPasswordResetBodyNewPasswordMin = 8;

export const postAuthPasswordResetBodyNewPasswordMax = 30;


export const postAuthPasswordResetBody = zod.object({
  "token": zod.string(),
  "newPassword": zod.string().min(postAuthPasswordResetBodyNewPasswordMin).max(postAuthPasswordResetBodyNewPasswordMax)
})

export const postAuthPasswordResetResponse = zod.object({
  "message": zod.string().optional()
})


/**
 * Delete the authenticated user's account.
 * @summary Delete User Account
 */
export const deleteAuthDeleteAccountResponse = zod.object({
  "message": zod.string().optional()
})


/**
 * Retrieve the authenticated user's profile information.
 * @summary Get User Profile
 */
export const getAuthProfileResponse = zod.object({
  "id": zod.string().optional(),
  "username": zod.string().optional(),
  "email": zod.string().email().optional(),
  "createdAt": zod.string().datetime().optional(),
  "updatedAt": zod.string().datetime().optional()
})


/**
 * Refresh the JWT token using a refresh token.
 * @summary Refresh JWT Token
 */
export const postAuthRefreshTokenBody = zod.object({
  "refreshToken": zod.string()
})

export const postAuthRefreshTokenResponse = zod.object({
  "accessToken": zod.string().optional(),
  "refreshToken": zod.string().optional(),
  "expiresIn": zod.number().optional(),
  "userId": zod.string().optional(),
  "username": zod.string().optional()
})


