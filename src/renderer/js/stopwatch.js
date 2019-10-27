const Stopwatch = () => {
  return {
    startDate: null,

    elapsed: null,

    intervalId: null,

    /**
     * Starts the stopwatch.
     */
    start: function(interval, callback) {
      this.startDate = Date.now();
      let id = setInterval(() => {
        const delta = Date.now() - this.startDate;
        this.elapsed = delta;
        callback(this.elapsed);
      }, interval);
      this.intervalId = id;
    },

    /**
     * Stops the stopwatch.
     */
    stop: function() {
      this.intervalId && clearInterval(this.intervalId);
    },
  };
}

export default Stopwatch;
