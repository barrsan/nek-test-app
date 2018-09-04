<template>
  <div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-6">
      <slot name="sidebar"></slot>
    </div>
    <div class="col-lg-8 col-md-6">
      <slot name="main"></slot>
    </div>
  </div>
</div>
</template>
