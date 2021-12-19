<template>
    <a class="TopRatedCard" :href="'/movie/' + item.id" v-for="(item, index) in result" :key="index">
        <img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path" alt="" className="card-img" />
        <div className="bottom title">
            <h4 className="toprated-title">{{ item.title }}</h4>
            <h5 className="toprated-date">Release date {{ item.release_date }}</h5>
        </div>
    </a>
</template>

<script>
    export default {
        props: ["result"],
    };
</script>

<style lang="scss">
    .TopRatedCard {
        width: 250px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-direction: column;
        margin-bottom: 50px;
        padding: 20px;
        transition: all ease 0.4s;
        border-radius: 10px;
        box-sizing: border-box;
        background-color: rgba(241, 241, 241, 0.4);
        border: 1px solid #e3e3e3;

        .card-img {
            width: 100%;
            border-radius: 10px;
        }

        &:hover {
            box-shadow: 5px 7px 15px 7px #353333;
        }

        .bottom {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            margin-top: 20px;

            .title {
                color: #303030;
            }

            .toprated-date {
                width: 100%;
                text-align: center;
                margin-top: 15px;
            }
        }
    }
</style>