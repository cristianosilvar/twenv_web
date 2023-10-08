//  import { db } from "../firebase/config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

interface DataInterface {
  email: string;
  password: string;
  displayName?: string | null | undefined;
}

export default function useAuthentication() {
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState(false);

  // cleanup
  const [cancelled, setCancelled] = useState(false);

  const auth = getAuth();

  function checkIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  // Create user
  const createUser = async (data: DataInterface) => {
    checkIsCancelled();
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);
      return user;
    } catch (error: any) {
      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "Mô' fraca! Mete 6 caracteres aí";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "Tão' usando esse email já";
      } else {
        systemErrorMessage = "Deu erro, tenta mais tardinha'";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // Logout
  const logOut = () => {
    checkIsCancelled();
    signOut(auth);
  };

  // Sign In

  const logIn = async (data: DataInterface) => {
    checkIsCancelled();
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      setLoading(false);
    } catch (error: any) {
      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Essa conta não existe, pô";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "A senha tá' errada";
      } else {
        systemErrorMessage = "Deu erro, tenta mais tardinha'";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logIn,
    logOut,
  };
}
