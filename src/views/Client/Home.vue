<template>
    <div>
        <Nav />
        <section
            class="parent-section no-padding post-1852 page type-page status-publish hentry"
        >
            <div class="container-fluid">
                <div class="row">
                    <div class="entry-content">
                        <MainSlide />
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
import Nav from '../../components/Nav';
import MainSlide from '../../components/MainSlide';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
export default {
    components: {
        Nav,
        MainSlide,
        Contact,
        Footer
    }
};
</script>
