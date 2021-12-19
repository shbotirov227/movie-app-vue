<template>
    <div class="card-wrapper container">
        <card :result="result" />
    </div>
</template>

<script>
    import Card from "../components/Card.vue";

    export default {
        name: "App",

        components: { Card },

        data() {
            return {
                token: "8c6b435d72ceead1a7aa11e193fde748",
                result: [],
            };
        },

        methods: {
            fetched() {
                fetch(`https://api.themoviedb.org/4/list/1?api_key=${this.token}`).then((res) => res.json()).then((data) => (this.result = data.results));
            },
        },

        created() {
            this.fetched();
        },
    };
</script>

<style lang="scss">
    .card-wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .movie-card {
        width: 250px;

        margin-bottom: 50px;
        padding: 20px;
        box-sizing: border-box;
        transition: all ease 0.4s;
        background-color: rgba(241, 241, 241, 0.4);
        border-radius: 10px;
        border: 1px solid #e3e3e3;

        &:hover {
            box-shadow: 5px 7px 15px 7px #353333;
        }

        &-img {
            width: 100%;
            /* height: 250px; */
            border-radius: 10px;
        }
    }
    .bottom {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 20px;
        color: #303030;

        .date {
            width: 100%;
            text-align: center;
            margin-top: 15px;
        }
    }
</style>
