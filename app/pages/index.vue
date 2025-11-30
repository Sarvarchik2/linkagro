<template>
  <div class="min-h-screen bg-primary-dark text-white font-sans selection:bg-accent selection:text-white">
    <AppHeader />
    
    <main>
      <section id="home"><HeroSection /></section>
      <section id="problem"><ProblemSolution /></section>
      <section id="how-it-works"><HowItWorks /></section>
      <section id="why-us"><WhyUs /></section>
      <section id="features"><Features /></section>
      <section id="implementation"><ImplementationSection /></section>
      <section id="roadmap"><RoadmapSection /></section>
      <section id="team"><TeamSection /></section>
      <section id="advantages"><Advantages /></section>
      <section id="contacts"><CallToAction /></section>
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
// Components are auto-imported by Nuxt
</script>
