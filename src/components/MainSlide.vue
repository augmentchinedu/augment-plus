<template>
  <section id="home" class=" padding-top-100px-bottom-0px">
    <div class="container">
      <div class="row">
        <div
          class="wpb_column brando-column-container  vc_col-sm-12 col-xs-mobile-fullwidth"
          data-front-class="brando-column-container  col-xs-mobile-fullwidth"
        >
          <div class="vc-column-innner-wrapper">
            <div class="wpd-innner-wrapper">
              <div
                id="brando-owl-slider2"
                class="owl-carousel owl-theme brando-owl-slider2 round-pagination light-pagination dark-navigation white-cursor main-slider"
              >
                <agile ref="carousel" :options="options">
                  <div
                    class="item owl-bg-img"
                    v-for="(post, index) in posts"
                    :key="index"
                  >
                    <div
                      class="opacity-full bg-dark-gray"
                      style="opacity:0.7;"
                    ></div>
                    <div class="position-relative">
                      <div
                        class="col-md-6 col-sm-6 no-padding travel-slider cover-background bg-image-srcset"
                        :style="post.img[0]"
                        @click="changePost($event, 'image')"
                      ></div>
                      <div
                        @click="changePost($event, 'post')"
                        class="col-md-6 col-sm-6 no-padding travel-slider cover-background bg-image-srcset"
                        :style="post.img[1]"
                      >
                        <div
                          class="slider-typography text-left padding-fourteen-all xs-padding-seven-all"
                        >
                          <div class="slider-text-middle-main">
                            <div
                              class="slider-text-middle slider-typography-option2 xs-display-block"
                            >
                              <span
                                v-if="post.title"
                                class="white-text font-weight-700 alt-font text-uppercase"
                                >{{ post.title }}</span
                              ><br />
                              <div
                                class="separator-line-extra-thick no-margin-lr margin-eleven-all xs-margin-seven-all xs-no-margin-lr xs-width-20"
                                style="background:#1e2126 !important;height:8px;"
                              ></div>
                              <p
                                class="white-text text-uppercase alt-font width-90 xs-text-small"
                              >
                                {{ post.text }}
                              </p>
                              <a
                                class="highlight-button-transparent-border btn btn-medium margin-seven-top inner-link"
                                target="_self"
                                href="#packages"
                                >{{ post.button }}</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <template slot="prevButton">prev</template> -->
                  <!-- <template slot="nextButton">next</template> -->
                </agile>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          title: 'Adventure Experiences',
          text: `Travel far from the busy world we live in to the unspoiled natural beauty of Africa and other Asian destinations.`,
          img: [
            'background-image:url(assets/images/slide/slide1a.jpg)',
            'background-image:url(assets/images/slide/slide1b.jpg)'
          ],
          button: 'Explore Now'
        },
        {
          title: 'Adventure Experiences',
          text: `Travel far from the busy world we live in to the unspoiled natural beauty of Africa and other Asian destinations.`,
          img: [
            'background-image:url(assets/images/slide/slide1a.jpg)',
            'background-image:url(assets/images/slide/slide1b.jpg)'
          ],
          button: 'Get Started'
        },
        {
          title: 'Adventure Experiences',
          text: `Travel far from the busy world we live in to the unspoiled natural beauty of Africa and other Asian destinations.`,
          img: [
            'background-image:url(assets/images/slide/slide1a.jpg)',
            'background-image:url(assets/images/slide/slide1b.jpg)'
          ],
          button: 'Apply'
        },
        {
          title: 'Adventure Experiences',
          text: `Travel far from the busy world we live in to the unspoiled natural beauty of Africa and other Asian destinations.`,
          img: [
            'background-image:url(assets/images/slide/slide1a.jpg)',
            'background-image:url(assets/images/slide/slide1b.jpg)'
          ],
          button: 'Book Seat'
        }
      ],
      options: {
        autoplay: true,
        dots: true,
        fade: true,
        infinite: false,
        navButtons: true,
        speed: 700,
        timing: 'ease-in-out',
        initialSlide: 2
      }
    };
  },
  methods: {
    changePost(event, item) {
      let x = event.layerX,
        divWidth =
          this.userAgent().browser.name == 'Chrome'
            ? event.toElement.offsetWidth
            : event.explicitOriginalTarget.clientWidth,
        currentSlide = this.$refs.carousel.getCurrentSlide() + 1;
      if (item == 'post') {
        this.$refs.carousel.goToNext();
        return;
      }
      if (this.userAgent().browser.name == 'Firefox' && x > divWidth / 3.5) {
        this.$refs.carousel.goToNext();
      } else if (this.userAgent().browser.name == 'Chrome') {
        let thirdPart = divWidth * (currentSlide - 1) - divWidth / 3;
        if (divWidth * (currentSlide - 1) == 0) {
          this.$refs.carousel.goToNext();
          return;
        } else if (Math.abs(x) < thirdPart) {
          this.$refs.carousel.goToNext();
        } else {
          this.$refs.carousel.goToPrev();
        }
      } else this.$refs.carousel.goToPrev();
    }
  }
};
</script>

<style scoped>
.owl-carousel {
  display: block;
}
</style>
