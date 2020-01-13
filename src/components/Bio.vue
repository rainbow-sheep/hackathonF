<template>
  <div class="card_right_box">
    <h1 class="card_title">{{ content.about.name }} 👋</h1>
    <div class="card_line"></div>
    <div>
      <div class="card_box ">
        <strong>Bio</strong>
        <p>{{content.about.description}}</p>
      </div>

      <div class="card_box ">
        <strong>Interests</strong>
        <div>
          <el-button size="small" round style="margin-top: 10px;"
                     v-for="i in content.interests"
            >{{ skills[i].emoji }} {{ skills[i].name }}</el-button>
        </div>
        <div class="card_divide"></div>
        <strong>Skills</strong>
        <div>
          <el-button size="small" round style="margin-top: 10px;"
                     v-for="i in content.skills"
          >{{ skills[i].emoji }} {{ skills[i].name }}</el-button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bio",
  props: {
    content: Object
  },
  data(){
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
      ]
    }
  },
  mounted() {
    // console.log(this.content)
  }
};
</script>

<style scoped>
.card_title {
}
.card_right_box {
  margin: 20px;

}
.card_line {
  margin-top: -18px;
  height: 7px;
  background: #aaa;
  width: 20%;
  margin-bottom: 20px;
}
.card_divide {
  height: 2px;
  background: rgba(255, 255, 255, 0.2);
  width: 95%;
  margin: 20px auto 10px auto;
}
.card_box {
  margin-top: 10px;
  padding: 10px 20px;
  height: max-content;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
