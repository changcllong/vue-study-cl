<template>
    <section class="cv-parent">
        <div class="cv-parent-title">{{title}}</div>
        <slot></slot>
    </section>
</template>

<script>
export default {
    name: 'Parent',
    props: ['title']
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

