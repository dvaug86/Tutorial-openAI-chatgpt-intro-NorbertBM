const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const {Configuration, OpenAIapi} = require('openai')


const config = new Configuration({
    apiKey:""
    
})