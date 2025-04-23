//song list
let All_song = [
   {
     name: "METAMORPHOSIS ringtone",
     path: "../songs/song-5.ogg",
     img: "../images/1.jpg",
     singer: "NoCopyrightSounds [NCS]"
   },
   {
     name: "Passo Bem",
     path: "../songs/song-2.mp3",
     img: "../images/2.jpg",
     singer: "NoCopyrightSounds"
   },
   {
     name: "Imagine Dragons",
     path: "../songs/song-3.mp3",
     img: "../images/3.jpg",
     singer: "Audio Library"
   },
   {
     name: "Vidrado Em Voce",
     path: "../songs/song-1.mp3",
     img: "../images/4.jpg",
     singer: "imshahed"
   },
   {
     name: "Sing For The Moment Ringtone Bgm",
     path: "../songs/song-4.mp3",
     img: "../images/5.jpg",
     singer: "NoCopyrightSounds"
   },
   {
    name: "Into Your Arms",
    path: "../songs/song-6.mp3",
    img: "../images/6.jpg",
    singer: "Magic Free Release"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};


/*please follow all the rules so that you do not face any problem*/