// background.js

let color = '#8046c2';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cpurple', `color: ${color}`);
});