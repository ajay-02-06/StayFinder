import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase";

// ================= LOGIN =================

export const loginUser = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    switch (error.code) {
      case "auth/user-not-found":
        throw new Error("No account found with this email.");

      case "auth/wrong-password":
        throw new Error("Incorrect password.");

      case "auth/invalid-credential":
        throw new Error("Invalid email or password.");

      case "auth/invalid-email":
        throw new Error("Please enter a valid email.");

      case "auth/too-many-requests":
        throw new Error("Too many failed attempts. Please try again later.");

      default:
        throw new Error(error.message || "Login failed.");
    }
  }
};

// ================= SIGNUP =================

export const signupUser = async (email, password) => {
  try {
    return await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        throw new Error("Email already exists. Please login.");

      case "auth/invalid-email":
        throw new Error("Please enter a valid email.");

      case "auth/weak-password":
        throw new Error("Password must contain at least 6 characters.");

      default:
        throw new Error(error.message || "Signup failed.");
    }
  }
};

// ================= LOGOUT =================

export const logoutUser = async () => {
  return await signOut(auth);
};