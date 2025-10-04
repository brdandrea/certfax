import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

/*
  Props:
    items: [{ id, title, subtitle, img?, href }]
    interval: ms between auto-advances (default 4500)
*/
export default function Carousel({ items = [], interval = 4500 }) {
  const [index, setIndex] = useState(0);
  const dirRef = useRef(1);
  const timerRef = useRef(null);

  // Start the auto-advance once when items or interval change. Avoid
  // restarting on every `index` change which can cause choppy timing.
  useEffect(() => {
    if (items.length > 1) start();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length, interval]);

  function start() {
    stop();
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % items.length);
      dirRef.current = 1;
    }, interval);
  }
  function stop() {
    if (timerRef.current) clearInterval(timerRef.current);
  }

  function goTo(i) {
    dirRef.current = i > index ? 1 : -1;
    setIndex((i + items.length) % items.length);
  }

  function next() {
    dirRef.current = 1;
    setIndex(i => (i + 1) % items.length);
  }

  function prev() {
    dirRef.current = -1;
    setIndex(i => (i - 1 + items.length) % items.length);
  }

  if (!items || items.length === 0) return null;

  const current = items[index];

  return (
    <div
      className="carousel"
      onMouseEnter={stop}
      onMouseLeave={start}
      aria-roledescription="carousel"
    >
      <div className="carousel-window" role="region" aria-label="Featured certifications">
        <AnimatePresence initial={false} custom={dirRef.current} mode="wait">
          <motion.div
  key={current.id}
  className="carousel-slide"
  custom={dirRef.current}
  initial={{ opacity: 0, x: 28 * dirRef.current, scale: 0.995 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  exit={{ opacity: 0, x: -22 * dirRef.current, scale: 0.995 }}
  transition={{
    // use a tween for consistent, smooth timing across browsers/devices
    type: 'tween',
    duration: 0.45,
    ease: 'easeOut'
  }}
  // avoid layout prop — it causes layout thrashing and can make animations choppy
>
            <Link to={current.href} className="carousel-link" onClick={stop}>
              {current.img && <img src={current.img} alt="" className="carousel-thumb" />}
              <div className="carousel-copy">
                <h3 className="carousel-title">{current.title}</h3>
                {current.subtitle && <p className="carousel-sub">{current.subtitle}</p>}
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-controls">
        <button className="carousel-btn prev" onClick={() => { prev(); stop(); }} aria-label="Previous slide">◀</button>
        <div className="carousel-dots" role="tablist" aria-label="Slides">
          {items.map((it, i) => (
            <button
              key={it.id}
              className={`dot ${i === index ? 'active' : ''}`}
              onClick={() => { goTo(i); stop(); }}
              aria-label={`Show ${it.title}`}
              aria-selected={i === index}
              role="tab"
            />
          ))}
        </div>
        <button className="carousel-btn next" onClick={() => { next(); stop(); }} aria-label="Next slide">▶</button>
      </div>
    </div>
  );
}
