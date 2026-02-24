<script setup>
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import TechStack from './components/TechStack.vue'
import ArchitectureSection from './components/ArchitectureSection.vue'
import ExperienceTimeline from './components/ExperienceTimeline.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import EducationSection from './components/EducationSection.vue'
import FreelanceSection from './components/FreelanceSection.vue'
import ContactSection from './components/ContactSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="min-h-screen bg-primary text-text-main font-sans">
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <TechStack />
      <ArchitectureSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <EducationSection />
      <FreelanceSection />
      <ContactSection />
    </main>
    <FooterSection />
  </div>
</template>
