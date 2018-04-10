<template>
    <section :class="rootClass">
        <h2>Hello Vue</h2>
        <parent title="parent" >
            <textarea v-model="message" />
        </parent>
    </section>
</template>

<script>
import Parent from '@/components/parent';

export default {
    name: 'Main',
    components: {
        'parent': Parent
    },
    data() {
        return {
            rootClass: 'cv-main',
            message: ''
        }
    },
    watch: {
        message: function(newValue, oldValue) {
            console.log(this);
            // console.log(newValue, oldValue);
        }
    }
};
</script>

<style lang="scss" scoped>
.cv-main {
    margin: 0 10px;
}
</style>

