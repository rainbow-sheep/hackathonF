<template>
  <div class="interest_container">
    <Nav :has_background="true"></Nav>

    <div class="form_container">
      <div class="title">Select Your Interests</div>
      <div class="interest_buttons">
        <el-button size="medium"
                   :type="selectedKey[i.name] ? 'primary': ''"
                   @click="add_select(i)"
                   :disabled="selectDisable && !selectedKey[i.name]"
                   round v-for="i in interests" style="margin-top: 10px;">
          ‍ {{ i.emoji }} {{ i.name }}
        </el-button>
      </div>

      <div>
        <div v-for="i in features">
          <label class="auth_label">{{ i.name }}</label>
          <el-slider v-model="i.percentage"></el-slider>
        </div>
      </div>

      <el-button class="auth_button" @click="submit">Next</el-button>
    </div>
  </div>

</template>

<script>
  import Nav from "../components/Nav";
  export default {
    name: "interest",
    data(){
      return {
        interests: [
          {name: "Eating", emoji: "🏊‍"},
          {name: "Peeing", emoji: "🏊‍"},
          {name: "Bluffing", emoji: "🏊‍"},
          {name: "Shouing", emoji: "🏊‍"},
          {name: "Blowing", emoji: "🏊‍"},
          {name: "Sleeping", emoji: "🏊‍"},
          {name: "Dicking", emoji: "🏊‍"},
          {name: "Going", emoji: "🏊‍"},
          {name: "Python", emoji: "🏊‍"},
          {name: "Rust", emoji: "🏊‍"},
          {name: "Fucking", emoji: "🍆‍"},
          {name: "Fucking", emoji: "🍆‍"},
          {name: "Fucking", emoji: "🍆‍"},
          {name: "Fucking", emoji: "🍆‍"},
          {name: "Fucking", emoji: "🍆‍"},
        ],
        selected: [],
        selectedKey: {},
        features: [],
        selectDisable: false
      }
    },
    mounted(){

    },
    components: {Nav},
    methods: {
      get_index(name){
        for(let k in this.interests){
          if (this.interests[k].name === name){
            return k;
          }
        }
        return 0;
      },
      add_select(i){
        for (let k in this.selected){
          if(i.name === this.selected[k].name){
            // delete from selected
            let newArray = [];
            for (let oldKey in this.selected){
              if (oldKey !== k){
                newArray.push(this.selected[oldKey])
              }
            }
            this.selected = newArray;
            // delete from features
            newArray = [];
            for (let v of this.features){
              if (v.name !== i.name){
                newArray.push(v)
              }
            }
            this.features = newArray;
            this.selectedKey[i.name] = false;
            this.selectDisable = this.selected.length === 3;
            return;
          }
        }
        this.selected.push(i);
        this.features.push({
          index: this.get_index(i.name),
          percentage: 10,
          name: i.name
        });
        this.selectedKey[i.name] = true;
        this.selectDisable = this.selected.length === 3;
      },
      submit(){
        console.log(this.features);
      }
    }
  }
</script>

<style scoped>
  .interest_container {
    height: 100vh;
    overflow: hidden;
    background-image: url("/login_pic.jpg");
    background-size: cover;
  }
  .selected{
    background: #000;
  }
  .form_container{
    width: 80%;
    max-width: 700px;
    margin: 10vh auto;
    height: max-content;
    background: white;
    padding: 20px;
    border-radius: 10px;
  }
  .title{
    font-weight: 900;
    font-size: 32px;
    letter-spacing: 0.2px;
    line-height: 1.4;
  }
  .interest_buttons{
    display: flex;
    align-content: flex-start;
    flex-flow: wrap;
    justify-content: center;
  }
  .auth_button{
    margin-top: 20px;
    background-color: rgb(79, 101, 241);
    color: rgb(255, 255, 255);
    font-size: 15px;
    font-weight: 400;
    height: 44px;
    letter-spacing: 1px;
    line-height: inherit;
    text-transform: uppercase;
    width: 100%;
    box-shadow: rgb(67, 81, 232) 0px 0px 0px 0px inset, rgba(79, 101, 241, 0.15) 0px 7px 12px -2px;
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    border-radius: 4px;
    padding: 9px 20px;
    text-decoration: none;
  }
  @media screen and (max-width: 765px) {
    .form_container{
      margin-top: 10vh;
      width: 80%;
      max-width: 400px;
    }
  }
</style>
