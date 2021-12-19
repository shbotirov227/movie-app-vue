<template>
    <div class="populars">
        <card :result="result" />
    </div>
</template>

<script>
    import Card from "../components/Card.vue";

    export default {
        components: {
            Card,
        },

        data() {
            return {
                token: "8c6b435d72ceead1a7aa11e193fde748",
                result: [],
            };
        },

        created() {
            this.fetched();
        },

        methods: {
            fetched() {
                fetch(`https://api.themoviedb.org/3/movie/popular/?api_key=${this.token}`).then((res) => res.json()).then((data) => (this.result = data.results));
            },
        },
    };
</script>

<style lang="scss">
    .populars {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
