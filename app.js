// eslint-disable-next-line no-undef
const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      addedActivity: '',
      activities: []
    };
  },
  watch: {
    //whenever a data point changes, this method is called CAN USE LIKE THIS:
    counter(value){
      if (value <= 0){
        this.counter = 0
      }
      else if (value >= 100){
        this.counter = 100
      } else this.counter = value
    }
    },
  computed: {
    //these methods are executed differently than the ones below (not rexecuted every time when not bound to events), used almost like data properties
    fullName(){
      console.log("RUNNING AGAIN")
      if (this.name === ''){
        return ''
      } return this.name + " The Reindeer!"
    }
  },
  methods: {
    addActivity(){
      this.activities.push(this.addedActivity)
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput(){
      this.name = ''
    },
  }
});

app.mount('#events');
