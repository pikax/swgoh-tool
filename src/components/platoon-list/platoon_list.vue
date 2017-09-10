<div class="content">
  <button @click="refresh">Refresh users</button>

  <select v-model="stars" >
    <option :value="1">1</option>
    <option :value="2">2</option>
    <option :value="3">3</option>
    <option :value="4">4</option>
    <option :value="5">5</option>
    <option :value="6">6</option>
    <option :value="7">7</option>
  </select>
  <ul>
    <li v-for="p in platoons">
      <platoon :platoonId="p.id" :stars="stars"></platoon>
    </li>
  </ul>


</div>
