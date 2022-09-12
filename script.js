console.log("Welcome To Spotify");

// Inialize the variable
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let masterSongName = document.getElementById('masterSongName');
let songitem = Array.from(document.getElementsByClassName('songitem'));

let songs = [
  {
    songName: "Haikyuu - FLY HIGH",
    filePath: "songs/1.mp3",
    coverPath: "cover/cover1.jpg",
  },
  {
    songName: "Your lie in April - HIKARUNARA",
    filePath: "songs/2.mp3",
    coverPath: "cover/cover2.jpg",
  },
  {
    songName: "Demon Slayer S1 - GURENGHE",
    filePath: "songs/3.mp3",
    coverPath: "cover/cover4.jpg",
  },
  {
    songName: "Demon Slayer S2 - AIMER",
    filePath: "songs/4.mp3",
    coverPath: "cover/cover4.1.jpg",
  },
  {
    songName: "Naruto - BLUE BIRD",
    filePath: "songs/5.mp3",
    coverPath: "cover/Cover5.jpg",
  },
  {
    songName: "Tokyo Revengers - CRY BABY",
    filePath: "songs/6.mp3",
    coverPath: "cover/cover6.jpg",
  },
  {
    songName: "Bunny Girl Senpai",
    filePath: "songs/7.mp3",
    coverPath: "cover/cover7.jpg",
  },
  {
    songName: "Pokemon",
    filePath: "songs/8.mp3",
    coverPath: "cover/cover8.jpg",
  },
];

songitem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("Songname")[0].innerText = songs[i].songName;
});


// Handle play/pause click

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

// Listing to events
audioElement.addEventListener("timeupdate", () => {
  // Updating seek Bar
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
  element.addEventListener('click', (e) => {
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
  })
})

document.getElementById('next').addEventListener('click', () => {
  if (songIndex >= 8) {
    songIndex = 0
  }
  else {
    songIndex += 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', () => {
  if (songIndex <= 0) {
    songIndex = 0
  }
  else {
    songIndex -= 1;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
