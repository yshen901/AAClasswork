class Clock {
  constructor() {
    // 1. Create a Date object.
    const date = new Date(); //DO THIS WHEN YOU DON'T WANT TO KEEP THIS AROUND...
    // 2. Store the hours, minutes, and seconds.
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    // 3. Call printTime.
    this.printTime();
    // 4. Schedule the tick at 1 second intervals.

    setInterval(this._tick.bind(this), 1000) //bind makes it so this callback will be called w/ scope of this

    /*
      setInterval(callback, 
                  delay (# of milliseconds before calling callback,
                  [...args] (optional args to pass when the callback is called))
    */
  }

  printTime() {
    // Format the time in HH:MM:SS
    let formatted = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(formatted);
  }

  _tick() {
    this.seconds++;
    if (this.seconds === 60){
      this.seconds = 0;
      this.minutes++;
      if (this.minutes === 60){
        this.minutes = 0;
        this.hours++;
        if (this.hours === 24) 
          this.hours = 0;
      }
    }
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();