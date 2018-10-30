<template>
  <div>
    <div v-if="active">
      <h3>Only one vote, you can change at any time.</h3>

      <div class="name-containers">
        <div class="name name__left"
          v-bind:class="{ 'left-active': buttonPressed === 'left' }">
          {{votes.leftName}}
        </div>
        <div class="name name__right"
          v-bind:class="{ 'right-active': buttonPressed === 'right' }">
          {{votes.rightName}}
        </div>
      </div>

      <div class="buttons-container">
        <div class="vote-button"
          v-on:click="voteLeft"
          v-bind:class="{ 'inactive' : buttonPressed === 'left' }">  
          <vote-button-pink
            :clicked="buttonPressed === 'left'">
          </vote-button-pink>
        </div>
          <div class="vote-button"
            v-on:click="voteRight"
            v-bind:class="{ 'inactive' : buttonPressed === 'right' }">
            <vote-button-green
              :clicked="buttonPressed === 'right'">
            </vote-button-green>
        </div>
      </div>

      <div class="votes-container">
        <pink-vote class="vote" v-for="vote in leftPercentage" :key="vote.$index"></pink-vote>
        <green-vote class="vote" v-for="vote in rightPercentage" :key="vote.$index"></green-vote>
      </div>
    </div>
    <div v-if="!active">
      <h1 class="md-headline"> Waiting for debate...</h1>
    </div>
  </div>
</template>

<script>
  import firebase from 'firebase/app'
  import VoteButtonPink from './VoteButtonPink.vue'
  import VoteButtonGreen from './VoteButtonGreen.vue'
  import GreenVote from './GreenVote.vue'
  import PinkVote from './PinkVote.vue'

  export default {
    name: 'Storm',
    data() {
      return {
        active: false,
        buttonPressed: '',
        length: 14,
        leftPercentage: 0,
        rightPercentage: 0,
        votes: {
          left: 0,
          leftName: '',
          right: 0,
          rightName: '',
        }
      }
    },
    methods: {
      voteRight: function () {
        this.votes.right = this.votes.right + 1;
        if (this.buttonPressed === 'left' && this.votes.left !== 0) {
          this.votes.left = this.votes.left - 1;
        }
        this.buttonPressed = 'right';
        this.writeVoteData();
      },
      voteLeft: function () {
        this.votes.left = this.votes.left + 1;
        if (this.buttonPressed === 'right' && this.votes.right !== 0) {
          this.votes.right = this.votes.right - 1;
        }
        this.buttonPressed = 'left';
        this.writeVoteData();
      },
      writeVoteData: function () {
        firebase.database().ref('votes/').set(this.votes);
      },
      updateLocalVoteCount: function (value) {
        this.active = value.active;
        this.votes.left = value.votes.left;
        this.votes.leftName = value.votes.leftName;
        this.votes.right = value.votes.right;
        this.votes.rightName = value.votes.rightName;

        this.calculatePercentage(value.votes.left, value.votes.right)
      },
      calculatePercentage: function (left, right) {
        if (!left & !right) {
          var lengthHalfed = this.length / 2;
          this.leftPercentage = lengthHalfed;
          this.rightPercentage = lengthHalfed;
        } else {
          var percentageVote = this.length / (left + right);
          this.leftPercentage = Math.floor(percentageVote * left);
          this.rightPercentage = Math.floor(percentageVote * right);
        }
      }
    },
    created() {
      var voteCountRef = firebase.database().ref();
      voteCountRef.on('value', (snapshot) => {
        this.updateLocalVoteCount(snapshot.val());
      });
    },
    components: {
      'vote-button-green': VoteButtonGreen,
      'vote-button-pink': VoteButtonPink,
      'green-vote': GreenVote,
      'pink-vote': PinkVote,
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.name-containers {
  margin: auto;
  max-width: 520px;
  padding-bottom: 10px;
}

.name {
  background-color: #131313;
  border-color: #313131;
  color: white;
  display: inline-block;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  position: relative;
  text-transform: uppercase;
  width: 43%;
}

.name__left {
  border-radius: 16px 0 0 16px;
}

.name__right {
  border-radius: 0 16px 16px 0;
}

.name__left:after,
.name__right:after {
  background-color: #131313;
  content: '';
  display: block;
  position: absolute;
  height: 100%;
  width: 18px;
  top: 0;
  transform: skew(-35deg);
  z-index: 1;
}

.name__left:after {
  right: -2px;
}

.name__right:after {
  left: 2px;
  border-left: 1px solid #2C2C2C;
}

.right-active,
.right-active:after {
  background-color: #00FF4A;
}

.left-active,
.left-active:after {
  background-color: #FF00E5;
}

.buttons-container,
.votes-container {
  background-color: #131313;
  border-radius: 16px;
  margin: auto;
  max-width: 500px;
  -moz-box-shadow:    inset 0 11px 10px #000000;
  -webkit-box-shadow: inset 0 11px 10px #000000;
  box-shadow:         inset 0 11px 10px #000000;
}

.buttons-container {
  padding-top: 2%;
}

.votes-container {
  border-radius: 50px;
  margin-top: 30px;
  width: 100%;
}

.vote-button {
  display: inline-block;
  width: 49%;
}

.inactive { 
  pointer-events: none; 
}

.vote {
  margin-top: -10px;
  margin-right: -31px;
  margin-left: -31px;
  margin-bottom: -20px;
}
</style>
