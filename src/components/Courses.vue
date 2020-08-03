<template>
  <div>
    <ul v-for="(school, index) in courses.schools" :key="index">
      <li>
        <strong> {{ school.title }} </strong>
        <ul>
          <CourseListItem
            v-for="(course, index) in school.courses"
            :key="index"
            :link="course.link"
            :title="course.title"
            :author="course.author"
          />
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import CourseListItem from "./CourseListItem";

export default {
  name: "Courses",
  data() {
    return {
      courses: this.$store.state.courses
    };
  },
  components: {
    CourseListItem
  }
};
</script>

<style>
ul {
  margin-top: 1em;
  margin-left: 0.5em;
}
a:hover {
  text-decoration: underline;
}
</style>
