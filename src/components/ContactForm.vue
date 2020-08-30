<template>
  <div>
    <form class="w-full mt-3 max-w-sm" @submit.prevent="submitForm">
      <div class="md:flex md:items-center mb-6" v-show="!submitted">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Your Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value=""
            v-model.trim="name"
            required
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6" v-show="!submitted">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-email"
          >
            Your Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="email"
            value=""
            v-model.trim="email"
            required
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6" v-show="!submitted">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-password"
          >
            Subject
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password"
            type="text"
            v-model.trim="subject"
            required
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6" v-show="!submitted">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-message"
          >
            Message
          </label>
        </div>
        <div class="md:w-2/3">
          <textarea
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-message"
            v-model.trim="message"
            required
          ></textarea>
        </div>
      </div>
      <div class="md:flex md:items-center" v-show="!submitted">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-1 px-5 rounded"
            type="submit"
          >
            Send!
          </button>
        </div>
      </div>
    </form>
    <p v-if="submitted" class="font-semibold">
      Thank you for your message. I will reply to you shortly.
    </p>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  name: "ContactForm",
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      submitted: false
    };
  },
  methods: {
    submitForm() {
      const templateParams = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      };
      emailjs
        .send("gmail", "contact", templateParams, process.env.VUE_APP_EMAIL_ID)
        .then(
          function(response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function(error) {
            console.log("FAILED...", error);
          }
        );
      this.submitted = true;
      this.name = "";
      this.email = "";
      this.subject = "";
      this.message = "";
    }
  }
};
</script>

<style></style>
