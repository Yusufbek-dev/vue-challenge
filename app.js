const app = Vue.createApp({
  data() {
    return {
      className: "",
      background:'',
      show:true,
    };
  },
  computed: {
    addClass() {
      return {
        user1: this.className === "user1",
        user2: this.className === "user2",
        hidden:!this.show,
        visible:this.show
      };
    },
  },
  methods: {
    showText() {
      this.show = !this.show;
    }
  },
});

app.mount("#assignment");

