import { useEffect, useRef } from 'react';

/**
 * Reusable wrapper komponen yang menambahkan animasi reveal saat elemen
 * masuk ke viewport (menggunakan IntersectionObserver).
 *
 * Props:
 *  - children: konten yang akan di-animate
 *  - className: class tambahan untuk wrapper div
 *  - delay: delay animasi dalam milliseconds (default: 0)
 *  - direction: 'up' | 'left' | 'right' | 'none' (default: 'up')
 */
function Reveal({ children, className = '', delay = 0, direction = 'up' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${direction} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

export default Reveal;
