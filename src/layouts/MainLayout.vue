<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="bg-deep-purple-1">
      <q-page>
        <q-card flat class="bg-deep-purple-6 text-white bottom-shape" style="height: 100px">
          <div class="text-h5 q-pa-md">
            My Wallet {{tab}}
          </div>
        </q-card>
        <q-scroll-area style="height: 83vh;" class="q-pa-md">
          <router-view />
        </q-scroll-area>
        <q-tabs
          v-model="tab"
          :breakpoint="0"
          align="justify"
          class="bg-deep-purple-8 text-white shadow-2 absolute-bottom"
        >
          <q-tab name="hone" label="home" icon="home" />
          <q-tab name="expenses" label="expenses" icon="list"/>
          <q-tab name="reports" label="reports" icon="bar_chart"/>
          <q-tab name="account" label="account" icon="person"/>
        </q-tabs>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
      tab: 'home'
    }
  },
  watch: {
    tab: (value) => {
      // console.log('tab: ', value)
      this.$router.replace({ name: value })
      // this.$q.notify({
      //   type: 'positive',
      //   message: value
      // })
    }
  }
}
</script>
