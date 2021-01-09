<template>
  <q-page>
    <q-card flat class="col text-black" bordered>
      <div class="row">
        <div class="col">
          <img src="../assets/debit.png" class="debit q-pl-md q-pt-md"/>
        </div>
        <div class="col q-pr-md">
          <div class="text-right">
          <div class="text-h5 text-weight-bold">{{today}}</div>
          <div class="text-subtitle2 text-weight-medium">Today's Expenses</div>
          <div class="text-h6 text-weight-medium">$ 10</div>
          </div>
        </div>
      </div>
    </q-card>
    <br>
    <q-card flat class="col q-pt-sm" bordered>
      <div class="q-pa-sm">
      <q-input outlined bottom-slots v-model="amount" placeholder="AMOUNT">
        <template v-slot:before>
          <q-icon @click="show(true)" size="lg" :name="icon" class="pointer" />
        </template>
      </q-input>
      </div>
      <div class="q-pa-sm">
      <q-btn flat size="lg" class="full-width bg-deep-purple-8 text-white" @click="notify">Add Expense</q-btn>
      </div>
    </q-card>
    <!-- <q-btn no-caps push color="white" text-color="primary" label="Grid BottomSheet" @click="show(true)" /> -->
  </q-page>
</template>

<script>
/* eslint-disable */
import { date } from 'quasar'
export default {
  name: 'PageIndex',
  data () {
    return {
      today: date.formatDate(new Date(), 'DD dddd YYYY'),
      amount: null,
      icon: 'directions_bus'
    }
  },
  methods: {
    notify() {
      this.$q.notify({
        type: 'positive',
        message: 'Successfully added',
        position: 'top'
      })
    },
    show(grid) {
      this.$q.bottomSheet({
        message: 'Select Expense Category',
        grid,
        actions: [
          {
            label: 'Bus',
            icon: 'directions_bus',
            color: 'primary',
            id: 'bus'
          },
          {
            label: 'Food',
            icon: 'tapas',
            color: 'primary',
            id: 'food'
          },
          {
            label: 'WIFI',
            icon: 'wifi_tethering',
            color: 'primary',
            id: 'wifi'
          },
          {},
          {
            label: 'Groceries',
            icon: 'local_grocery_store',
            color: 'primary',
            id: 'grocery'
          },
          {
            label: 'Shopping',
            icon: 'shopping_basket',
            color: 'primary',
            id: 'shopping'
          },
          {
            label: 'Bus',
            icon: 'directions_bus',
            color: 'primary',
            id: 'bus'
          },
          {
            label: 'Bus',
            icon: 'directions_bus',
            color: 'primary',
            id: 'bus'
          },
        ]
      }).onOk(action => {
        // console.log('Action chosen:', action.id)
        this.icon = action.icon
      }).onCancel(() => {
        // console.log('Dismissed')
      }).onDismiss(() => {
        // console.log('I am triggered on both OK and Cancel')
      })
    }
  }
}
</script>
<style scope>
  .debit {
    height: 100px;
  }
</style>