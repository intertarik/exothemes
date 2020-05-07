<template>
  <div class=" py-2 px-4">
     <hollow-dots-spinner
        :animation-duration="1000"
        :dot-size="15"
        :dots-num="3"
        :color="'#2232FF'"
        class="mx-auto"
    />
  </div>
</template>

<script>
  // To use minified css and js files instead of .vue single file components:
  // import 'epic-spinners/dist/lib/epic-spinners.min.css'
  // import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'
  
  // To get tree shaking from webpack (won't import all spinners when you only need one)
  // import AtomSpinner from 'epic-spinners/src/components/lib/AtomSpinner'
  
  import {HollowDotsSpinner} from 'epic-spinners'
  export default {
    components: {
      HollowDotsSpinner
    }
  }
</script>