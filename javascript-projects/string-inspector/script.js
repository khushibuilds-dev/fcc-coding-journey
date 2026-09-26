const fortunes = [
    "Suno! Aaj aapko koi bohot badi khushkhabari milne wali hai. Tayiar raho! 🎉",
    "Aapke aas-paas ek positive energy hai. Aaj ka din aapka hi hai! ✨",
    "Mujhe dikh raha hai ki jald hi aapko kuch bohot tasty khane ko milne wala hai! 🍕",
    "Mehnat karte rahiye, jo badlav aap chahte hain vo dheere-dheere aa raha hai. 💪"
];

function revealFortune() {
    // 1. Welcome page ko chhupao (hide karo)
    document.getElementById("welcome-page").classList.add("hidden");
    
    // 2. Fortune page ko dikhao (show karo)
    document.getElementById("fortune-page").classList.remove("hidden");
    
    // 3. List mai se koi bhi ek random message chuno
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const selectedFortune = fortunes[randomIndex];
    
    // 4. Us message ko screen par dikhao
    document.getElementById("fortune-message").innerText = selectedFortune;
}

// Dobara check karne ke liye back button ka function
function goBack() {
    document.getElementById("fortune-page").classList.add("hidden");
    document.getElementById("welcome-page").classList.remove("hidden");
}