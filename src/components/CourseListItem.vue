<template>
  <li>
    <a
      class="text-gray-500 text-small hover:text-blue-800"
      :href="url"
      target="_blank"
    >
      {{ course }} by {{ teacher }}
    </a>
  </li>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      url: this.link,
      course: this.title,
      teacher: this.author
    };
  }
};
</script>

<style></style>
