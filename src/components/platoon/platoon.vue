<div class="content">

  <div class="content col-md-3">
    {{platoon.name}} - {{filledCount}}/{{length}}

    <ul>
      <li v-for="t in toons">
        {{t.name}}
      </li>
    </ul>
  </div>
  <div>
    <select v-model="selectedUser">
      <option v-for="u in users" :value="u.name">
        {{u.name}}
      </option>
    </select>

    <select v-model="selectedToon">
      <option v-for="t in validToons" :value="t">
        {{t.name}}
      </option>
    </select>

  </div>
    <div >
    <!--<button @click="assignUserToon({user:selectedUser, toon:selectedToon})">add</button>-->
      <button @click="add">add</button>
      <button @click="addToon">addToon</button>
  </div>

</div>
