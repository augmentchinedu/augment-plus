<template>
    <router-view></router-view>
</template>

<script>
export default {
    created() {
    },
    mounted() {
        this.$store.dispatch('updateDomain');
    }
};
</script>
