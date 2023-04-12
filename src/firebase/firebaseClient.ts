import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_APP_ID,
   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore DB 인스턴스 가져오기
const db = getFirestore(app);

// 데이터 추가하기
// path 컬렉션이 이미 생성되어있으면 추가 || 아니면 컬렉션 생성 후 데이터 create
// 해당 아이디의 데이터가 이미 존재하면 덮어쓰기 때문에 중복되지않게 주의!

export const addData = async (data: object, path: string) => {
   try {
      const docRef = await addDoc(collection(db, path), { ...data, createdAt: serverTimestamp() });
      console.log('Document written with ID: ', docRef.id);
   } catch (e) {
      console.error('Error adding document: ', e);
   }
};
// 해당 경로 컬렉션의 모든 데이터 읽어오기
export const getDatas = async (path: string) => {
   try {
      const querySnapshot = await getDocs(collection(db, path));

      const data = querySnapshot.docs.map(doc => ({
         id: doc.id,
         ...doc.data(),
      }));

      console.log(data);
      return data;
   } catch (e) {
      console.error('Error getting document: ', e);
   }
};

//해당 경로 컬렉션에서 특정 id의 데이터만 읽어오기

export const getData = async (path: string, id: string) => {
   try {
      const docRef = doc(db, path, id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
         console.log(docSnap.data());
      } else {
         console.log(`Document with ID '${id}' does not exist`);
      }
   } catch (error) {
      console.error(error);
   }
};

export const updateData = async (id: string, data: object, path: string) => {
   try {
      await updateDoc(doc(db, path, id), data);
      console.log('Document updated');
   } catch (e) {
      console.error('Error updating document: ', e);
   }
};

export const deleteData = async (id: string, path: string) => {
   try {
      await deleteDoc(doc(db, path, id));
      console.log('Document deleted');
   } catch (e) {
      console.error('Error deleting document: ', e);
   }
};

const auth = getAuth(app);

export const loginWithEmail = async (email: string, password: string) => {
   try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log(user);
      return true;
   } catch (error) {
      console.error(error);
      return false;
   }
};
