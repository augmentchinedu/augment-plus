<template>
    <router-view></router-view>
</template>

<script>
export default {
    created() {
        console.log(this.userAgent())
    },
    mounted() {
        this.$store.dispatch('updateDomain');
    }
};
</script>
