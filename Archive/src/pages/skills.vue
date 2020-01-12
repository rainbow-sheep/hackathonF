<template>
  <div class="skill_container">
    <Nav :has_background="true"></Nav>

    <div class="form_container">
      <div class="title">Pick your top three skills</div>
      <div class="skill_buttons">
        <el-button
          :key="i"
          class="removeFocusColor"
          size="medium"
          :type="selectedKey[i.name] ? 'primary' : ''"
          @click="add_select(i)"
          :disabled="selectDisable && !selectedKey[i.name]"
          round
          v-for="i in skills"
          style="margin-top: 10px;"
        >
          ‍ {{ i.emoji }} {{ i.name }}
        </el-button>
      </div>

      <div>
        <div v-for="i in features" v-bind:key="i">
          <label class="auth_label">{{ i.name }}</label>
          <el-slider v-model="i.percentage"></el-slider>
        </div>
      </div>

      <el-button id="auth_button" @click="submit">Next</el-button>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav";
export default {
  name: "skill",
  data() {
    return {
      skills: [
        { name: "Creative Writing", emoji: "🖊️" },
        { name: "Math", emoji: "➕" },
        { name: "Teaching", emoji: "🏫" },
        { name: "Making Friends", emoji: "🎎" },
        { name: "Statistical Analysis", emoji: "📊" },
        { name: "ML/AI", emoji: "🤖" },
        { name: "Video Editing", emoji: "📹" },
        { name: "Scrum/Agile", emoji: "🔄" },
        { name: "Persuasion", emoji: "💬" },
        { name: "Coding", emoji: "💻" },
        { name: "Database/SQL", emoji: "📋" },
        { name: "Listening", emoji: "👂" },
        { name: "Technical Writing", emoji: "📚" },
        { name: "Troubleshooting", emoji: "💡" },
        { name: "Negotiation", emoji: "🤝" }
      ],
      selected: [],
      selectedKey: {},
      features: [],
      selectDisable: false
    };
  },
  mounted() {},
  components: { Nav },
  methods: {
    get_index(name) {
      for (let k in this.skills) {
        if (this.skills[k].name === name) {
          return k;
        }
      }
      return 0;
    },
    add_select(i) {
      for (let k in this.selected) {
        if (i.name === this.selected[k].name) {
          // delete from selected
          let newArray = [];
          for (let oldKey in this.selected) {
            if (oldKey !== k) {
              newArray.push(this.selected[oldKey]);
            }
          }
          this.selected = newArray;
          // delete from features
          newArray = [];
          for (let v of this.features) {
            if (v.name !== i.name) {
              newArray.push(v);
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
    submit() {
      console.log(this.data);
      window.location = "#/dashboard";
    }
  }
};
</script>

<style scoped>
.skill_container {
  height: 100vh;
  overflow: hidden;
  background-size: cover;
}
.selected {
  background: #000;
}

.title {
  font-weight: 900;
  font-size: 32px;
  letter-spacing: 0.2px;
  line-height: 1.4;
}
.skill_buttons {
  display: flex;
  align-content: flex-start;
  flex-flow: wrap;
  justify-content: center;
}
</style>
