const firebase = require('firebase/app');
require ('firebase/auth');

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
};



firebase.initializeApp(firebaseConfig);

module.exports = {
    async createNewUser(email, password){ //cria o login do usuário com base no email e na senha
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password); // cria o user

      return result.user.uid; //user id
    },

    async login(email, password){
      
        const result = await firebase // busca o login no firebase
          .auth()
          .signInWithEmailAndPassword(email, password);  //login com o usuario ja cadastrado no sistema

        return result.user.id; // user id
    },
};