function dark_theme() {
    let root = document.documentElement;
    root.style.setProperty('--bg-color', '#1a1a2e');
    root.style.setProperty('--bg-secondary', '#16213e');
    root.style.setProperty('--glass-bg', 'rgba(255, 255, 255, 0.03)');
    root.style.setProperty('--glass-border', 'rgba(255, 255, 255, 0.08)');
    root.style.setProperty('--secondary', '#0f3460');
    root.style.setProperty('--text-primary', '#ffffff');
    root.style.setProperty('--text-secondary', '#a0a0a0');
}

function light_theme() {
    let root = document.documentElement;
    root.style.setProperty('--bg-color', '#f5f0f0');
    root.style.setProperty('--bg-secondary', '#ede8e8');
    root.style.setProperty('--glass-bg', 'rgba(0, 0, 0, 0.03)');
    root.style.setProperty('--glass-border', 'rgba(0, 0, 0, 0.1)');
    root.style.setProperty('--secondary', '#d6e4f7');
    root.style.setProperty('--text-primary', '#000000');
    root.style.setProperty('--text-secondary', '#000000');
}

const themeSelect = document.getElementById('theme');
themeSelect.addEventListener('change', function () {
    if (this.value === 'light') {
        light_theme();
    } else {
        dark_theme();
    }
});
const exploreBtn = document.querySelector('.explore_btn');
const mainDetails = document.querySelector('.main_details');
const audio_player = document.querySelector('.audio_player');

exploreBtn.addEventListener('click', function () {
    mainDetails.scrollIntoView({ behavior: 'smooth' });
    audio_player.style.opacity = '1';
});

const tracks = {
    track1: {
        name: "Phonk",
        songs: ["audio/phonks/alexgrohl-sweet-life-luxury-chill-438146.mp3", "audio/phonks/bransboynd-fresh-457883.mp3", "audio/phonks/denys_brodovskyi-tell-me-what-379638.mp3"]
    },
    track2: {
        name: "English",
        songs: ["audio/english/aberrantrealities-organic-flow-1015-remastered-485950.mp3", "audio/english/fassounds-escape-your-love-upbeat-fashion-pop-dance-412230.mp3", "audio/english/kontraa-no-sleep-hiphop-music-473847.mp3"]
    },
    track3: {
        name: "Nasheed",
        songs: ["audio/nasheeds/Ahmad_Al-Muquit_-_Beautyfull_nasheed_(mp3.pm).mp3", "audio/nasheeds/light-of-faith-425565.mp3", "audio/nasheeds/Muhammad_A_-_Antassalam_Arabic_Nasheed_(mp3.pm).mp3", "audio/nasheeds/path-to-jannah-425563.mp3", "audio/nasheeds/Wase_al_Karam_Nasheed_-_Moj_Gospod_Samyj_CSHedryj_(mp3.pm).mp3"]
    },
    track4: {
        name: "Bangla",
        songs: ["audio/bangla/creatorfiroz--329709.mp3", "audio/bangla/roni8090--342226.mp3", "audio/bangla/sm_sakib-je-aghat-korco-tumi-458914.mp3"]
    }
};

const sidebarTitle = document.querySelector('.sidebar_nav h2');
const sidebarSongsContainer = document.querySelector('.sidebar_songs');

document.querySelectorAll('.tracks').forEach(e => {
    e.addEventListener('click', () => {
        const track = tracks[e.dataset.trackid];
        // if there is no track in the array that match the trackid data then it will return 
        if (!track) return;
        audio_player.style.opacity = '1';
        sidebarTitle.textContent = track.name + ' Songs';
        //looping into the specific object songs 
        sidebarSongsContainer.innerHTML = track.songs.map((songPath, i) => `
            <div class="song_list" data-src="${songPath}">
                <h3> Song ${i + 1}</h3>
            </div>
        `).join('');

        document.querySelectorAll('.tracks').forEach(t => t.classList.remove('track_active'));
        e.classList.add('track_active');
    });
});

sidebarSongsContainer.addEventListener('click', (e) => {
    const song = e.target.closest('.song_list');
    if (!song) return;
    audio.src = song.dataset.src;
    audio.play();
});

const subscribeBtn = document.querySelector('.subscribe');
if (subscribeBtn) {
    subscribeBtn.addEventListener('click', () => {
        subscribeBtn.innerText = "Cooming Soon";
        subscribeBtn.style.opacity = 0.7;
    });
}