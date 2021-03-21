import Vue from "vue";
import CognitoAuth from "./cognito";
import config from "@/config";
console.log("here ", process.env.region);
const auth = new CognitoAuth(config);

// Vue.use(CognitoAuth, config);

export default auth;
