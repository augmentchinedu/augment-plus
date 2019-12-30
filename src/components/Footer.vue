<template>
    <footer
        class="brando-footer cover-background"
        style="background-image:url(../assets/images/footer-img.jpg)"
    >
        <div class="opacity-light bg-dark-blue"></div>
        <!-- footer logo -->
        <div class="footer-bottom no-padding position-relative">
            <div class="container">
                <div
                    class="row footer-border border-top border-transperent-white-light padding-three-tb xs-padding-twelve-tb"
                >
                    <div
                        class="col-md-12 col-sm-12 text-center margin-one-bottom"
                    >
                        <a class="inner-link" href="#home">
                            <img
                                src="../assets/images/logo-footer.png"
                                alt="footer-logo"
                            />
                        </a>
                    </div>
                    <div class="col-md-12 col-sm-12 text-center">
                        <span
                            class="text-small text-uppercase light-gray-text brando-footer-text alt-font"
                            >© {{ getYear() }} Brando is proudly powered by
                            <a
                                href="https://augment.plus/"
                                target="_blank"
                                class="light-gray-text"
                                >Augment Plus</a
                            ></span
                        >
                    </div>
                </div>
            </div>
        </div>
        <!-- end footer logo -->
    </footer>
</template>

<script>
export default {
    methods: {
        getYear() {
            return new Date().getFullYear();
        }
    }
};
</script>
