export default function main(config) {
    config.addPassthroughCopy("src/style.css")
  return { dir: { input: "src", output: "pages" } };
}
