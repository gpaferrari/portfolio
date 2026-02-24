import { onMounted, onUnmounted } from 'vue'

/**
 * Reusable Intersection Observer composable for scroll-triggered animations.
 * Adds 'scroll-visible' class when element enters viewport.
 *
 * Usage:
 *   const { observeElements } = useScrollAnimation()
 *   onMounted(() => observeElements('.animate-on-scroll'))
 */
export function useScrollAnimation(options = {}) {
  const defaultOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px',
    ...options,
  }

  let observer = null

  function observeElements(selector, container = document) {
    const elements = container.querySelectorAll(selector)
    if (!elements.length) return

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible')
          // Staggered animation for children
          const children = entry.target.querySelectorAll('[data-stagger]')
          children.forEach((child, i) => {
            setTimeout(() => {
              child.classList.add('scroll-visible')
            }, i * 100)
          })
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)

    elements.forEach((el) => {
      el.classList.add('scroll-hidden')
      observer.observe(el)
    })
  }

  function observeEl(el) {
    if (!el) return
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible')
          observer.unobserve(entry.target)
        }
      })
    }, defaultOptions)
    el.classList.add('scroll-hidden')
    observer.observe(el)
  }

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return { observeElements, observeEl }
}
