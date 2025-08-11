<script setup lang="ts">
import { ref } from 'vue';

const isPlaying = ref(false);
const currentTime = ref('0:00');
const duration = ref('3:45');
const progress = ref(0);
const volume = ref(50);
const shuffleMode = ref(false);
const repeatMode = ref(false);

// Placeholder function for playback control
function togglePlay() {
  isPlaying.value = !isPlaying.value;
}

// Placeholder function for next/previous track
function nextTrack() {
  console.log('播放下一首');
}

function prevTrack() {
  console.log('播放上一首');
}

// Placeholder function for volume control
function setVolume(event: Event) {
  const target = event.target as HTMLInputElement;
  volume.value = parseInt(target.value, 10);
}

// Placeholder function for shuffle mode
function toggleShuffle() {
  shuffleMode.value = !shuffleMode.value;
}

// Placeholder function for repeat mode
function toggleRepeat() {
  repeatMode.value = !repeatMode.value;
}
</script>

<template>
  <div class="player-page">
    <div class="main-content">
      <div class="cover-container">
        <img src="https://placehold.co/400x400/a8dadc/1d3557?text=Cover" alt="专辑封面" class="cover-image" />
      </div>

      <div class="song-info">
        <h3 class="title">歌曲标题</h3>
        <p class="artist">艺术家</p>
      </div>
    </div>

    <div class="bottom-bar">
      <div class="progress-bar-wrapper">
        <div class="time-info">
          <span class="current-time">{{ currentTime }}</span>
          <span class="duration">{{ duration }}</span>
        </div>
        <div class="progress-bar">
          <div class="progress" :style="{ width: progress + '%' }"></div>
        </div>
      </div>

      <div class="controls-bar">
        <div class="settings-left">
          <button class="control-btn" @click="toggleShuffle" :class="{ 'active': shuffleMode }">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="16" y1="3" x2="21" y2="3"></line>
              <path d="M21 9l-5 5"></path>
              <path d="M21 15l-5 5"></path>
              <path d="M11 5l-5 5l5 5"></path>
            </svg>
          </button>
          <button class="control-btn" @click="toggleRepeat" :class="{ 'active': repeatMode }">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17 1l4 4l-4 4"></path>
              <path d="M21 5H3V9"></path>
              <path d="M3 19l4 4l-4 4"></path>
              <path d="M21 19H3V15"></path>
            </svg>
          </button>
        </div>

        <div class="play-controls">
          <button class="control-btn prev-btn" @click="prevTrack">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="19 20 9 12 19 4 19 20"></polygon>
              <line x1="5" y1="19" x2="5" y2="5"></line>
            </svg>
          </button>
          <button class="control-btn play-pause-btn" @click="togglePlay">
            <svg v-if="!isPlaying" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          </button>
          <button class="control-btn next-btn" @click="nextTrack">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="5 4 15 12 5 20 5 4"></polygon>
              <line x1="19" y1="5" x2="19" y2="19"></line>
            </svg>
          </button>
        </div>

        <div class="settings-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14m-2.12 -2.12a7 7 0 0 0 0 -9.9"></path>
          </svg>
          <input type="range" min="0" max="100" v-model="volume" @input="setVolume" class="volume-slider" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.player-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #f0f4f8;
  padding: 20px;
  box-sizing: border-box;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1; /* 占据所有可用空间 */
  width: 100%;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
}

.cover-container {
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  flex-shrink: 0;
}

.cover-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.song-info {
  margin: 20px 0;
  text-align: center;
}

.song-info .title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #1d3557;
  margin-bottom: 5px;
}

.song-info .artist {
  font-size: 1.2rem;
  color: #4a4a4a;
}

.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.progress-bar-wrapper {
  width: 100%;
  max-width: 800px;
  margin-bottom: 20px;
}

.time-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 10px;
}

.progress-bar {
  width: 100%;
  height: 1.5px;
  background-color: #e2e8f0;
  border-radius: 3px;
  position: relative;
}

.progress {
  height: 100%;
  background-color: #a8dadc;
  border-radius: 3px;
  transition: width 0.3s ease;
}

.controls-bar {
  width: 100%;
  max-width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.play-controls {
  display: flex;
  justify-content: center;
  align-items: center;
}

.control-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #1d3557;
  padding: 10px;
  transition: transform 0.2s ease, color 0.2s ease;
}

.control-btn:hover {
  transform: scale(1.1);
  color: #a8dadc;
}

.control-btn.active {
  color: #1d3557;
}

.play-pause-btn {
  margin: 0 30px;
}

.play-pause-btn svg {
  color: #1d3557;
}

.play-pause-btn:hover svg {
  color: #89c2d9;
}

.settings-left, .settings-right {
  display: flex;
  align-items: center;
  gap: 10px;
}

.volume-slider {
  width: 100px;
  -webkit-appearance: none;
  height: 4px;
  background: #e2e8f0;
  border-radius: 2px;
  outline: none;
  transition: background 0.2s;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  background: #a8dadc;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0,0,0,0.2);
}
</style>
