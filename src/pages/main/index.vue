<template>
    <section :class="rootClass">
        <h2>Hello Vue</h2>
        <parent title="parent" >
            <textarea v-model="value" />
        </parent>
        <child class="a">
            <child>
                <child>
                    <span class="b">{{text}}</span>
                </child>
            </child>
        </child>
    </section>
</template>

<script>
import Parent from '@/components/parent';
import Child from '@/components/child';

export default {
    name: 'Main',
    components: {
        'parent': Parent,
        'child': Child
    },
    data() {
        return {
            rootClass: 'cv-main',
            text: 'test'
        }
    },
    computed: {
        value: {
            get() {
                return this.$store.state.value;
            },
            set(value) {
                this.$store.commit({
                    type: 'updateValue',
                    value
                });
            }
        }
    },
    watch: {
        value: function(newValue, oldValue) {
            this.text = newValue;
            console.log(newValue, oldValue);
        }
    }
};
</script>

<style lang="scss" scoped>
.cv-main {
    margin: 0 10px;
}
</style>

