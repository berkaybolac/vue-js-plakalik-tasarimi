
<template>

  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav>
        <ul>
          <li>
            <a href="">
              Plaka Tasarım Merkezi
            </a>
          </li>
          <li>
            <a href="">
              Hakkımızda
            </a>
          </li>
        
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }},  <md-icon>favorite</md-icon> 
        <a href="" target="_blank">Plaka Tasarım Merkezi</a>
   
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  /* eslint-disable */
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
