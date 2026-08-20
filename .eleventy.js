export default function main(config) {
    config.addPassthroughCopy("src/static")
    return { 
      dir: { input: "src", output: "pages" },
      pathPrefix: process.env.GITHUB_ACTIONS ? "/my-repo/" : "/",
    };
}
