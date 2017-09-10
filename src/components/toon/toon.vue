<div class="container">
  <div class="row">
    <div class="content col-md-4">
      <h1>Toons</h1>
      <button @click="refresh">REfresh</button>
      <ul>
        <li v-for="toon in alltoons" v-on:click='onChangeToon(toon)'>
          {{toon}}
        </li>
      </ul>
    </div>
    <div class="content col-md-1" v-if="selectedToon">
      {{selectedToon.name}}
    </div>


    <div class="content col-md-2">
      <ul>
        <li v-for="user in users" >
          {{user.name}}
        </li>
      </ul>
    </div>
    <!--<div class="content col-md-4">-->
      <!--<platoon :platoonId="1"></platoon>-->
    <!--</div>-->
  </div>
</div>
