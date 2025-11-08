import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-auth.js";
import { auth, db } from "./firebaseconfig.js";
import {
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/12.4.0/firebase-firestore.js";

console.log("hello world");

const userInfoContainer = document.querySelector(".user-info");
const loginContainer = document.querySelector(".login");
const userImage = document.querySelector(".user-img");
const logoutBtn = document.querySelector("#logout-btn");
const cardContainer = document.querySelector(".cards-container");

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid);

    userInfoContainer.style.display = "block";
    loginContainer.style.display = "none";

    const userInfo = await getDataFromDB(uid, "users");
    userImage.src = userInfo[0].profile;
    const allAds = await getDataFromDB(null, "ads");

    console.log("all", allAds);
    allAds.map((item, index) => {
      cardContainer.innerHTML += `
      
      <div class="card">
        <img src=${item.carImage} alt="Car 1" class="card-img" />
        <div class="card-content"><h3>${item.carTitle}</h3>
          <p>${item.carDescription}</p>
          <p class="price">$${item.carPrice}</p><button class="more-info-btn" data-id=${item.docid} >More Info</button></div>
      </div>
      `;
    });

    const moreInfoBtn = document.querySelectorAll(".more-info-btn");
    moreInfoBtn.forEach(item => {
      item.addEventListener('click' , event => {
        localStorage.setItem("itemID" , event.target.parentNode.lastChild.dataset.id)
        window.location = "detail.html"
        
      })
    })
  } else {
    console.log("logi nahi");
  }
});

async function getDataFromDB(uid, collections) {
  const data = [];

  const q = query(collection(db, collections), where("uid", "==", uid));
  const querySnapshot = uid
    ? await getDocs(q)
    : await getDocs(collection(db, collections));
  querySnapshot.forEach((doc) => {
    data.push({ ...doc.data(), docid: doc.id });
  });
  return data;
}

logoutBtn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      window.location = "login.html";
    })
    .catch((error) => {
      alert("error occured");
    });
});


export {getDataFromDB}