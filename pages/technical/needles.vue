<template>
  <section class="section">
    <div class="columns is-multiline">
      <div class="column is-12">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <nuxt-link to="/">
                <span class="icon is-small">
                  <i class="fad fa-home" aria-hidden="true" />
                </span>
                <span>Home</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/technical">
                <span class="icon is-small">
                  <i class="fad fa-info-circle" aria-hidden="true" />
                </span>
                <span>Technical Info</span>
              </nuxt-link>
            </li>
            <li class="is-active">
              <nuxt-link to="">
                <span class="icon is-small">
                  <i class="fad fa-chart-bar" aria-hidden="true" />
                </span>
                <span>Needles</span>
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="columns">
          <div class="column is-8">
            <h4 class="fancy-font-bold is-size-3">
              SU Carburettor Needles
            </h4>
            <p class="is-size-5 pt-20">
              One of the most confusing things about working on your Classic Mini often is the carburettor needle used on your car. Below you will find a multi-needle comparison chart which will allow you to compare needle profiles of multiple SU needles at the same time. Choose the needles you would like to compare and click Compare which will redraw the chart with new profiles. A huge thank you to the mintylamb site for posting this information publically.
            </p>
          </div>
          <div class="column is-4">
            <h4 class="fancy-font-bold is-size-3">
              Find the Needles you need?
            </h4>
            <h5 class="fancy-font-book is-size-5 pb-20">
              Order them on Seven Mini Parts
            </h5>
            <div class="card">
              <div class="card-content">
                <a href="https://cmdiy.co/CarbNeedles" target="_blank" alt="Link to Classic Mini Needles">
                  <img class="seven-logo" src="~/assets/img/seven-logo-horiz.png" alt="Seven Mini Parts Logo">
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="column is-12 hr mt-20"></div>
      <div class="column is-12">
        <b-tabs type="is-toggle" position="is-centered">
          <b-tab-item label="Compare" icon-pack="fas" icon="fas fa-chart-line" class="pt-10">
            <needleConfig />
          </b-tab-item>
          <b-tab-item label="Charts" icon-pack="fas" icon="fas fa-table" class="columns is-multiline pt-10">
            <div class="column is-12 has-text-centered">
              <h5 class="fancy-font-book is-size-5">
                Information provided by <a href="https://www.7ent.com/pages/articles-tech-tips/chart-carburetor-needle.html" target="_blank">Seven Mini Parts</a>
              </h5>
            </div>
            <needleTable />
          </b-tab-item>
        </b-tabs>
      </div>
    </div>
  </section>
</template>
<script>
import needleConfig from '~/components/NeedleConfigurator';
import needleTable from '~/components/NeedleTable';

export default {
  components: {
    needleConfig,
    needleTable
  },
  data () {
    return {};
  },
  head () {
    return {
      title: 'Technical - SU Needles Chart',
      meta: [
        { hid: 'description', name: 'description', content: 'Finding the right needle for your Classic Mini Cooper can be tough. Use this online comparison chart to find the right profile for your engine build.' }
      ]
    };
  }
};
</script>

<style lang="scss">
.seven-logo {
  display: inline-block;
  margin: auto;
  width: 100%;
}
.b-tabs .tab-content {
  padding-left: 0px;
  padding-right: 0px;
}
.hr {
  border-top: 1px solid whitesmoke;
}
</style>
