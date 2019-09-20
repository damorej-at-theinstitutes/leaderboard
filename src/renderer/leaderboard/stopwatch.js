const Stopwatch = () => {
  return {
    startDate: null,

    elapsed: null,

    intervalId: null,

    start: function(interval, callback) {
      this.startDate = Date.now();
      let id = setInterval(() => {
        const delta = Date.now() - this.startDate;
        this.elapsed = delta;
        callback(this.elapsed);
      }, interval);
      this.intervalId = id;
    },

    stop: function() {
      this.intervalId && clearInterval(this.intervalId);
    }
  };
}

export default Stopwatch;
