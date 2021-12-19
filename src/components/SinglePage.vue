<template>
    <div class="single-page">
        <!-- <card /> -->
    </div>
</template>

<script>
    // import Card from "../components/Card.vue"

    export default {
        components: {
            // Card
        },

        data () {
        
        },

        created () {
            console.log(this.data);
        },

        methods: {
            fetched () {
                fetch (`https://api.themoviedb.org/3/movie/${match.params.id}`).then(res => res.json()).then(data => this.result = data.results);
                console.log(data);
            }
        },

    }
</script>

<style lang="scss">
    
</style>