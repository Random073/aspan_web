<template></template>

<script></script>

<style scoped>
h1 {
  font-size: 3.5rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  color: #1261d8;
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 10rem;
  margin-top: 5rem;
}

h2 {
  font-size: 2rem;
  font-family: Helvetica, sans-serif;
  font-weight: bold;
  color: #1261d8;
  margin-bottom: 1rem;
  text-align: left;
  margin-left: 10rem;
}

p {
  font-size: 1.2rem;
  font-family: Helvetica, sans-serif;
  color: #333;
  text-align: left;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 1rem;
}

ul {
  font-size: 1.2rem;
  font-family: Helvetica, sans-serif;
  color: #333;
  text-align: left;
  margin-left: 12rem;
  margin-right: 10rem;
  margin-bottom: 1rem;
  list-style-type: circle;
}

hr {
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 85%;
  margin-left: 8%;
  margin-right: 20%;
}

/* ===== Mobile-First Fix ===== */
@media (max-width: 768px) {
  h1,
  h2,
  p,
  ul {
    margin-left: 1.2rem !important; /* Much smaller left margin */
    margin-right: 1.2rem !important; /* Balanced right margin */
    max-width: calc(100% - 2rem); /* Prevents overflow */
    word-wrap: break-word; /* Ensures text doesn’t overflow */
  }

  h1 {
    font-size: 2rem; /* Better mobile size */
    line-height: 1.3; /* Improves readability */
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.4;
  }

  p,
  ul {
    font-size: 1.2rem;
    line-height: 1.6; /* More breathing room between lines */
  }

  ul {
    padding-left: 1.5rem; /* Proper bullet alignment */
  }

  hr {
    margin-left: 1rem !important;
    margin-right: 1rem !important;
    width: calc(100% - 2rem); /* Fits screen width */
  }
}
</style>
