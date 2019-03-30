const scrollToRef = ref => {
  document
    .getElementById(ref)
    .scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start"
  });
}

export default scrollToRef;

