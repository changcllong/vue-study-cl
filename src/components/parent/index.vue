<template>
    <section class="cv-parent">
        <div class="cv-parent-title">{{title}}</div>
        <div v-for="item in list" :key="item">
            <slot v-bind:item="item"></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Parent',
    props: ['title'],
    data() {
        return {
            list: [ 0, 1, 2, 3 ]
        }
    }
}
</script>

<style lang="scss" scoped>
.cv-parent {
    padding: 10px;
    &-title {
        text-align: center;
        font-size: 20px;
    }
}
</style>
