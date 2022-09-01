import { ref } from 'vue';
import screenfull from 'screenfull';

export default function useFullscreen() {
  const screenfullActive = ref(false);

  const toggleScreenfull = function() {
    if (screenfull.isEnabled) {
      if (screenfull.isFullscreen) {
        screenfull.exit();
        screenfullActive.value = false;
      } else {
        screenfull.request();
        screenfullActive.value = true;
      }
    }
  };

  const openScreenfull = function() {
    if (screenfull.isEnabled) {
      screenfull.request();
      screenfullActive.value = true;
    }
  };
  const closeScreenfull = function() {
    if (screenfull.isEnabled) {
      screenfull.exit();
      screenfullActive.value = false;
    }
  };
  return {
    screenfullActive,
    toggleScreenfull,
    openScreenfull,
    closeScreenfull,
  };
}
