<script>
export default {
    name: 'Child',
    render(createElement) {
        return this.$slots.default[0];
    }
}
</script>
