const Countdown = () => {
  return {
    duration: 0,

    elapsed: 0,

    intervalId: null,

    /**
     * Starts the countdown.
     */
    start: function(duration, updateCallback, finishCallback, interval = 1000) {
      this.duration = duration;

      updateCallback(duration - this.elapsed);

      let id = setInterval(() => {
        this.elapsed += 1;
        if (updateCallback) {
          updateCallback(duration - this.elapsed);
        }
        if (this.elapsed === duration) {
          finishCallback(duration - this.elapsed);
          clearInterval(id);
        }
      }, interval);

      this.intervalId = id;
    },

    /**
     * Stops the countdown.
     */
    stop: function() {
      this.intervalId && clearInterval(this.intervalId);
    },
  }
};

export default Countdown;
