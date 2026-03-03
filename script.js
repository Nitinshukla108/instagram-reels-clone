const reels = [
  {
    isMuted:true,
    username: "alex_jordan",
    likeCount: 1920,
    isLiked: false,
    commentCount: 312,
    caption: "Chilling on a late night walk 🌙✨",
    video: "./videos/video1.mp4",
    userprofile: "./photos/photo1.jpg",
    shareCount: 120,
    isFollowed: true,
  },
  {
    isMuted:true,
    username: "the_traveller",
    likeCount: 850,
    isLiked: true,
    commentCount: 97,
    caption: "Sunset hits differently when you're alone 🌅",
    video: "./videos/video2.mp4",
    userprofile: "./photos/photo2.jpg",
    shareCount: 45,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "foodie_corner",
    likeCount: 4320,
    isLiked: false,
    commentCount: 621,
    caption: "Best pasta of my life ❤️🍝",
    video: "./videos/video3.mp4",
    userprofile: "./photos/photo3.jpg",
    shareCount: 210,
    isFollowed: true,
  },
  {
    isMuted:true,
    username: "deep_music",
    likeCount: 1230,
    isLiked: true,
    commentCount: 201,
    caption: "Music heals everything 🎧🖤",
    video: "./videos/video4.mp4",
    userprofile: "./photos/photo4.jpg",
    shareCount: 75,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "tech_expert",
    likeCount: 996,
    isLiked: false,
    commentCount: 114,
    caption: "New gadget drop tomorrow! ⚡📱",
    video: "./videos/video5.mp4",
    userprofile: "./photos/photo5.jpg",
    shareCount: 60,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "comic_lab",
    likeCount: 7650,
    isLiked: true,
    commentCount: 1024,
    caption: "I swear this joke wasn't scripted 😂🔥",
    video: "./videos/video6.mp4",
    userprofile: "./photos/photo6.jpg",
    shareCount: 560,
    isFollowed: true,
  },
  {
    isMuted:true,
    username: "pet_world",
    likeCount: 3122,
    isLiked: false,
    commentCount: 284,
    caption: "He just learned to shake hands 🐶🤝",
    video: "./videos/video7.mp4",
    userprofile: "./photos/photo7.jpg",
    shareCount: 230,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "gym_bro",
    likeCount: 5200,
    isLiked: true,
    commentCount: 348,
    caption: "Push it till you break 💪🔥",
    video: "./videos/video8.mp4",
    userprofile: "./photos/photo8.jpg",
    shareCount: 400,
    isFollowed: true,
  },
  {
    isMuted:true,
    username: "dance_flow",
    likeCount: 8290,
    isLiked: false,
    commentCount: 970,
    caption: "Practice makes perfect 🕺✨",
    video: "./videos/video9.mp4",
    userprofile: "./photos/photo9.jpg",
    shareCount: 510,
    isFollowed: false,
  },
  {
    isMuted:true,
    username: "nature_diaries",
    likeCount: 4520,
    isLiked: false,
    commentCount: 331,
    caption: "Fresh morning vibes 🌿🌤️",
    video: "./videos/video10.mp4",
    userprofile: "./photos/photo10.jpg",
    shareCount: 209,
    isFollowed: true,
  },
];

let allReels = document.querySelector('#all-reels');

function addData(){
    let sum = '';

    reels.forEach(function(elem,idx){
        sum += `
        <div id="reels">
            <video loop autoplay muted src="${elem.video}"></video>

            <div id="${idx}" class="mute">
              <i class="ri-volume-mute-fill"></i>
            </div>

            <div id="bottom">
              <div id="users">
                <img src="${elem.userprofile}" />
                <h5>${elem.username}</h5>
                <button id="${idx}" class="follow">${elem.isFollowed?'Unfollow':'Follow'}</button>
                <div id="about">
                  <p>${elem.caption}</p>
                </div>
              </div>
            </div>

            <div id="right">
              <div id="${idx}" class="like">
                <h4>${elem.isLiked ? '<i class="ri-heart-fill"></i>' : '<i class="ri-heart-line"></i>'}</h4>
                <h5>${elem.likeCount}</h5>
              </div>

              <div id="comment">
                <h4><i class="ri-chat-1-line"></i></h4>
                <h5>${elem.commentCount}</h5>
              </div>

              <div id="share">
                <h4><i class="ri-share-forward-line"></i></h4>
                <h5>${elem.shareCount}</h5>
              </div>

              <div id="menu">
                <h4><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
        </div>`;
    });

    allReels.innerHTML = sum;
}

addData();

allReels.addEventListener('click', function(e){

  // LIKE
  if(e.target.closest('.like')){
      let index = e.target.closest('.like').id;
      reels[index].isLiked = !reels[index].isLiked;
      reels[index].likeCount += reels[index].isLiked ? 1 : -1;
      addData();
  }

  // FOLLOW
  if(e.target.closest('.follow')){
      let index = e.target.closest('.follow').id;
      reels[index].isFollowed = !reels[index].isFollowed;
      addData();
  }

  // MUTE FIX (NO RERENDER)
  if(e.target.closest('.mute')){
      let index = e.target.closest('.mute').id;
      let videos = document.querySelectorAll('#reels video');
      let video = videos[index];

      video.muted = !video.muted;

      e.target.closest('.mute').innerHTML =
        video.muted
          ? '<i class="ri-volume-mute-fill"></i>'
          : '<i class="ri-volume-up-fill"></i>';
  }

});
