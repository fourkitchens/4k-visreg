const chromedriver = require("chromedriver");
const percy = require("@percy/nightwatch");

module.exports = {
  src_folders: ["tests/nightwatch"],
  output_folder: false,
  custom_commands_path: [percy.path],

  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    port: "9515"
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        chromeOptions: {
          args: ["headless"]
        }
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true
      }
    }
  }
};
