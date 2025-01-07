<template>
  <div class="body">
    <header>
      <nav>
        <ul>
          <li><NuxtLink to="/souye/content">内容</NuxtLink></li>
          <li><NuxtLink to="/souye/about">关于</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <NuxtPage />

    <footer>footer</footer>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.body {
  margin: 0 150px;
}
</style>
