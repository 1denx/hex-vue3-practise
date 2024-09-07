<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    name: '珍珠奶茶',
    desc: '香濃奶茶搭配QQ珍珠',
    price: 50,
    stock: 20
  },
  {
    id: 2,
    name: '冬瓜檸檬',
    desc: '清新冬瓜配上新鮮檸檬',
    price: 45,
    stock: 18
  },
  {
    id: 3,
    name: '翡翠檸檬',
    desc: '綠茶與檸檬的完美結合',
    price: 55,
    stock: 34
  },
  {
    id: 4,
    name: '四季春茶',
    desc: '香醇四季春茶，回甘無比',
    price: 45,
    stock: 10
  },
  {
    id: 5,
    name: '阿薩姆奶茶',
    desc: '阿薩姆紅茶搭配香醇鮮奶',
    price: 50,
    stock: 25
  },
  {
    id: 6,
    name: '檸檬冰茶',
    desc: '檸檬與冰茶的清新組合',
    price: 45,
    stock: 20
  },
  {
    id: 7,
    name: '芒果綠茶',
    desc: '芒果與綠茶的獨特風味',
    price: 55,
    stock: 18
  },
  {
    id: 8,
    name: '抹茶拿鐵',
    desc: '抹茶與鮮奶的絕配',
    price: 60,
    stock: 20
  }
])
const isEditItem = ref(false)
const editIndex = ref(-1)
const tempItem = ref({})

// 編輯狀態
const editState = (index, action) => {
  if (action === 'edit') {
    isEditItem.value = true
    editIndex.value = index
    tempItem.value = { ...products.value[index] }
    console.log(tempItem.value)
  } else if (action === 'save') {
    editIndex.value = -1
    isEditItem.value = false
    tempItem.value.price = checkPrice(products.value[index].price, tempItem.value.price)
    products.value[index] = { ...tempItem.value }
    tempItem.value = {}
  } else if (action === 'cancel') {
    editIndex.value = -1
    isEditItem.value = false
  }
}

// 庫存
const stockNum = {
  reduce(item) {
    if (item.stock > 0) {
      item.stock--
    }
  },
  add(item) {
    item.stock++
  }
}

const checkPrice = (origin_price, price) => {
  if (price == '' || isNaN(price)) {
    return origin_price
  }
  return price < 0 ? 0 : price
}
</script>

<template>
  <div class="container mt-3">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">品項</th>
          <th scope="col">描述</th>
          <th scope="col">價格</th>
          <th scope="col">庫存</th>
          <th scope="col">功能</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td>
            <input
              type="text"
              class="form-control"
              v-model="tempItem.name"
              v-if="isEditItem && editIndex === index"
            />
            <span v-else>{{ item.name }}</span>
          </td>
          <td>
            <input
              type="text"
              class="form-control"
              v-model="tempItem.desc"
              v-if="isEditItem && editIndex === index"
            />
            <span v-else>
              <small>{{ item.desc }}</small>
            </span>
          </td>
          <td>
            <input
              type="number"
              class="form-control"
              v-model.number="tempItem.price"
              v-if="isEditItem && editIndex === index"
            />

            <span v-else>{{ item.price }}</span>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-sm btn-outline-dark me-2"
              @click="stockNum.reduce(item)"
            >
              -
            </button>
            {{ item.stock }}
            <button
              type="button"
              class="btn btn-sm btn-outline-dark ms-2"
              @click="stockNum.add(item)"
            >
              +
            </button>
          </td>
          <template v-if="isEditItem && editIndex === index">
            <button
              type="button"
              class="btn btn-sm btn-dark me-2 mt-2"
              @click="editState(index, 'save')"
            >
              保存
            </button>
            <button
              type="button"
              class="btn btn-sm btn-outline-dark me-2 mt-2"
              @click="editState(index, 'cancel')"
            >
              取消
            </button>
          </template>
          <td v-else>
            <button
              type="button"
              class="btn btn-sm btn-dark me-2"
              @click="editState(index, 'edit')"
            >
              編輯
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
