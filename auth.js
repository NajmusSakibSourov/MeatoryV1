import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } 
  from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc } 
  from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";

// 🔹 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAVWsjI6DMnC8Hds5EHmhMXdLn3clRExVE",
  authDomain: "meatory-8dcf9.firebaseapp.com",
  databaseURL: "https://meatory-8dcf9-default-rtdb.firebaseio.com",
  projectId: "meatory-8dcf9",
  storageBucket: "meatory-8dcf9.firebasestorage.app",
  messagingSenderId: "9202682676",
  appId: "1:9202682676:web:c9fe1faafd25933b7eb361",
  measurementId: "G-39G71Z2J2M"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// -------------------- REGISTER --------------------
const registerForm = document.querySelector("#registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // stop default form submission

    const username = document.querySelector("#reg-username").value.trim();
    const email = document.querySelector("#reg-email").value.trim();
    const password = document.querySelector("#reg-password").value;
    const confirm = document.querySelector("#reg-confirm").value;
    const role = document.querySelector("#reg-role").value;

    // Check if any field is empty
    if (!username || !email || !password || !confirm || !role) {
    Swal.fire({
        icon: "warning",
        title: "Incomplete Form",
        text: "Please fill out all fields before registering."
    });
    return; // Stop further execution
    }

    // Check if passwords match
    if (password !== confirm) {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match!"
    });
    return;
    }


    document.querySelector("#reg-username").value = "";
    document.querySelector("#reg-email").value = "";
    document.querySelector("#reg-password").value = "";
    document.querySelector("#reg-confirm").value = "";
    document.querySelector("#reg-role").value = "";


    const submitBtn = registerForm.querySelector("button[type='submit']");
    submitBtn.disabled = true; // prevent multiple clicks

    Swal.fire({
        icon: "success",
        title: "Registration Successful!",
        text: "You can now login."
    });

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "users", userCred.user.uid), {
        username,
        email,
        role,
        createdAt: new Date()
      });

      registerForm.reset(); // clear inputs

      window.location = "Index.html"; // redirect to login

    } catch (err) {
      let msg = err.message;
      if (err.code === "auth/email-already-in-use") {
        msg = "This email is already registered. Please login.";
      }
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: msg
      });
    } finally {
      submitBtn.disabled = false;
    }
  });
}

