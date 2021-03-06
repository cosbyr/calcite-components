const childProcess = require("child_process");
const githubRelease = require("gh-release");
const { normalize } = require("path");
const pify = require("pify");
const rimraf = require("rimraf");

const packageFileName = childProcess.execSync("npm pack", { encoding: "utf-8" }).trim();
const packagePath = normalize(`${__dirname}/../${packageFileName}`);
const packageScope = "esri-";

const options = {
  assets: [
    {
      name: packageFileName.replace(packageScope, ""),
      path: packagePath
    }
  ],
  auth: {
    token: process.env.GH_RELEASE_GITHUB_API_TOKEN
  },
  yes: true // skips prompt
};

pify(githubRelease)(options)
  .then(() => console.info("Released on GitHub! 🎉"))
  .catch((error) => console.error("Could not create GitHub release", error))
  .then(() => rimraf.sync(packagePath));
