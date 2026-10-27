<script setup lang="ts">
import { computed, ref } from 'vue'
const input = ref('1,3,5,7,9,7,5,3,1,')
const nums = computed(() => input.value.split(',').map(s => s.trim()).filter(Boolean))
const valid = computed(() => nums.value.length > 0 && nums.value.every(x => /^-?\d+$/.test(x)))
const palindrome = computed(() => valid.value && nums.value.every((x, i) => x === nums.value[nums.value.length - 1 - i]))
</script>

<template>
  <div class="demo-card">
    <div class="demo-head">✨ 交互式演示：Central List</div>
    <label for="sequence">输入逗号分隔的整数序列</label>
    <input id="sequence" v-model="input" placeholder="例如 1,2,1," />
    <p v-if="!valid" class="demo-invalid">请输入至少一个整数，元素之间使用英文逗号分隔。</p>
    <template v-else>
      <div class="demo-nodes">
        <span v-for="(num, i) in nums" :key="i" class="demo-node">{{ num }}</span>
      </div>
      <p class="demo-result" :class="{ 'demo-no': !palindrome }">判定结果：<strong>{{ palindrome ? 'Yes（中心对称）' : 'No（不是中心对称）' }}</strong></p>
    </template>
  </div>
</template>
