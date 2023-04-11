async function main() {
  console.log("This is a test application")
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
})