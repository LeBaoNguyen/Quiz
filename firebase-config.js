// ✅ Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, get, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// ✅ Cấu hình Firebase (Thay YOUR_CONFIG bằng thông tin từ Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyDpe2rXNkZjOuHbOLhNfIJl4fjfimD3ZzI",
  authDomain: "quiz-team3.firebaseapp.com",
  databaseURL: "https://quiz-team3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-team3",
  storageBucket: "quiz-team3.firebasestorage.app",
  messagingSenderId: "944762295219",
  appId: "1:944762295219:web:e47ddb35165fe2c648b1c6"
};

// ✅ Khởi tạo Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// ✅ Xuất để sử dụng trong file khác
export { db, ref, set, get, onValue, remove, update };
