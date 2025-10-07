# Testing Guide - Cursor Effects & Magnetic Navigation

## Quick Test Checklist

### ✅ Custom Cursor Ball
- [ ] Cursor muncul saat mouse masuk ke window
- [ ] Cursor dot (putih kecil) mengikuti mouse dengan smooth
- [ ] Cursor circle (border) mengikuti dengan slight delay
- [ ] Cursor hilang di mobile/tablet (auto-detect)
- [ ] Default cursor browser sudah tersembunyi
- [ ] Cursor menghilang saat mouse keluar dari window

### ✅ Text Reveal Effect (Responsive)
- [ ] Hero title "Creative Developer" - hijau muncul saat hover
- [ ] Section title "Let's Work Together" - hijau muncul saat hover
- [ ] Text hijau RESPONSIVE (ukuran sama dengan text asli)
- [ ] Text hijau mengikuti mouse position dalam radius 150px
- [ ] Clip-path circle smooth animation
- [ ] Text reveal hilang saat mouse leave

### ✅ Navbar Magnetic Effect
- [ ] Nav links (Projects, Contact, About) bergerak saat mouse mendekat
- [ ] Nav links kembali dengan elastic bounce
- [ ] Underline hijau (#00ff88) muncul saat hover
- [ ] CTA button "Hire Me" hijau dengan text dark
- [ ] CTA button berubah ke lighter green saat hover
- [ ] CTA button scale up saat hover
- [ ] Logo dot berubah hijau dan scale saat hover

### ✅ Contact Cards Magnetic
- [ ] Contact cards di section "Get in Touch" bergerak smooth
- [ ] Icon dalam card bergerak lebih dramatis
- [ ] Elastic bounce back saat mouse leave

### ✅ Interactive Elements Cursor Enlarge
- [ ] Cursor membesar (80px) saat hover link
- [ ] Cursor membesar saat hover button
- [ ] Cursor membesar saat hover contact card
- [ ] Cursor dot mengecil dan fade saat enlarge

---

## Detailed Testing Steps

### 1. Desktop Testing (Chrome/Firefox/Safari)

#### Step 1: Load Homepage
1. Open `http://localhost:4322/`
2. Verify preloader animation completes
3. Check custom cursor appears immediately after preloader

#### Step 2: Hero Section
1. Move mouse to hero title "Creative Developer"
2. Hover over "Creative" - green reveal should appear
3. Move mouse around - green text follows cursor
4. Check if green text size MATCHES white text exactly
5. Hover over "Developer" - same effect
6. Leave text - green disappears smoothly

#### Step 3: Navbar
1. Scroll to top if needed
2. Hover "Projects" link:
   - Link moves toward cursor
   - Green underline appears
   - Link scales up slightly
3. Move mouse away:
   - Link bounces back elastically
   - Underline fades out
4. Repeat for "Contact" and "About"
5. Hover "Hire Me" button:
   - Button moves toward cursor
   - Changes from green to lighter green
   - Arrow icon moves right
   - Shadow appears
6. Hover logo:
   - Logo moves slightly
   - Dot "." turns green and scales up

#### Step 4: Cursor States
1. Hover over plain text - cursor normal size
2. Hover over any link - cursor enlarges to 80px
3. Hover over button - cursor enlarges
4. Move to empty area - cursor returns to normal

#### Step 5: Contact Section
1. Scroll to "Get in Touch" section
2. Hover "Let's Work Together" title:
   - Green text reveal appears
   - Check responsiveness (text size matches)
3. Hover contact cards:
   - Card moves toward cursor
   - Icon moves more dramatically
   - Cursor enlarges
4. Move mouse away:
   - Elastic bounce back animation

---

### 2. Responsive Testing

#### Desktop (1920x1080)
- [ ] All effects work perfectly
- [ ] Text reveal responsive
- [ ] No performance issues

#### Laptop (1440x900)
- [ ] Cursor effects still smooth
- [ ] Text reveal matches text size
- [ ] Navbar magnetic works

#### Tablet (1024x768)
- [ ] Cursor effects DISABLED
- [ ] Normal cursor appears
- [ ] No magnetic effects
- [ ] Fallback to normal hover states

#### Mobile (375x667)
- [ ] Cursor completely hidden
- [ ] Touch interactions work normally
- [ ] No console errors

---

### 3. Browser Compatibility

#### Chrome/Edge (Chromium)
Expected: ✅ All effects work perfectly
- [ ] Cursor smooth
- [ ] Text reveal responsive
- [ ] Magnetic effects work
- [ ] No console errors

#### Firefox
Expected: ✅ All effects work
- [ ] mix-blend-mode works
- [ ] clip-path animations smooth
- [ ] GSAP animations work

#### Safari
Expected: ✅ All effects work
- [ ] Webkit support OK
- [ ] Pseudo-element ::before works
- [ ] attr(data-text) works

---

### 4. Performance Testing

#### FPS Check (Chrome DevTools)
1. Open DevTools > Performance
2. Start recording
3. Move mouse around hero title rapidly
4. Stop recording
5. Check FPS stays above 55fps

Expected: ✅ 60fps on modern hardware

#### Memory Leak Check
1. Open DevTools > Memory
2. Take heap snapshot
3. Hover text multiple times
4. Take another snapshot
5. Compare - should not grow significantly

Expected: ✅ No memory leaks

---

### 5. Edge Cases

#### Test Case 1: Rapid Mouse Movement
- Move mouse very quickly across screen
- Cursor should still follow smoothly
- No lag or stutter

#### Test Case 2: Multiple Text Hovers
- Hover hero title
- Quickly move to section title
- Both should work independently
- No conflicts

#### Test Case 3: Window Resize
- Hover text to show green reveal
- Resize browser window
- Green text should STILL match original size
- No layout breaks

#### Test Case 4: Scroll While Hovering
- Hover navbar link
- Scroll page down
- Navbar hides (auto-hide on scroll)
- Scroll up - navbar returns
- Magnetic effect still works

#### Test Case 5: Mouse Leave/Enter Window
- Move mouse out of browser window
- Cursor should fade out
- Move back in
- Cursor should fade in

---

## Common Issues & Solutions

### Issue: Cursor tidak muncul
**Solution:**
- Check browser console for errors
- Verify GSAP loaded: `window.gsap` in console
- Check if screen width > 1024px
- Verify media query `(hover: hover)` matches

### Issue: Text reveal tidak responsive
**Solution:**
- ✅ FIXED: Using `::before` with `attr(data-text)`
- Verify element has `data-text` attribute
- Check CSS `::before` pseudo-element exists
- Inspect computed styles in DevTools

### Issue: Magnetic effect terlalu kuat
**Solution:**
- Edit `NavbarMagnetic.astro`
- Reduce strength value (0.25 → 0.15)
- Adjust duration for slower movement

### Issue: Performance lag
**Solution:**
- Reduce cursor animation duration
- Disable MutationObserver if not needed
- Limit number of text reveal targets

---

## Visual Test Results Expected

### Hero Title
```
Before hover: Creative Developer (white)
During hover: Creative Developer (white + green circular reveal)
After hover:  Creative Developer (white)
```

### Navbar Links
```
Normal:    Projects (gray, no underline)
Hover:     Projects (white, green underline, moved)
After:     Projects (gray, elastic bounce back)
```

### CTA Button
```
Normal:    Hire Me → (green bg, dark text)
Hover:     Hire Me → (lighter green, moved, shadow)
After:     Hire Me → (green bg, bounce back)
```

### Cursor States
```
Default:      ⚪ (8px dot + 40px circle)
On link:      ⚪ (4px dot + 80px circle, faded)
On text:      ⚪ with green reveal following
Out window:   invisible
```

---

## Automated Test Script (Optional)

Copy to browser console:

```javascript
// Test 1: Check cursor elements exist
console.log('Cursor dot:', document.querySelector('.cursor-dot'));
console.log('Cursor circle:', document.querySelector('.cursor-circle'));

// Test 2: Check text targets
console.log('Text targets:', document.querySelectorAll('.cursor-text-target').length);

// Test 3: Check navbar magnetic setup
console.log('Nav links:', document.querySelectorAll('.nav-link').length);
console.log('Nav CTA:', document.querySelector('.nav-cta'));

// Test 4: Check GSAP loaded
console.log('GSAP:', typeof gsap !== 'undefined' ? '✅' : '❌');

// Test 5: Check media query
console.log('Hover support:', window.matchMedia('(hover: hover)').matches ? '✅' : '❌');
console.log('Width > 1024:', window.innerWidth > 1024 ? '✅' : '❌');
```

Expected output:
```
Cursor dot: <div class="cursor-dot">
Cursor circle: <div class="cursor-circle">
Text targets: 5-10 (depends on content)
Nav links: 3
Nav CTA: <a class="nav-cta">
GSAP: ✅
Hover support: ✅
Width > 1024: ✅
```

---

## Sign Off Checklist

Before marking as complete:

- [ ] All basic cursor tests pass
- [ ] Text reveal is fully responsive
- [ ] Navbar magnetic works on all links
- [ ] No console errors
- [ ] Performance is smooth (60fps)
- [ ] Mobile correctly disables effects
- [ ] All browsers tested (Chrome, Firefox, Safari)
- [ ] Edge cases handled
- [ ] Documentation updated

---

## Test Results

**Tested by:** _______________  
**Date:** _______________  
**Browser:** _______________  
**Screen Size:** _______________  
**Result:** ⬜ Pass / ⬜ Fail  

**Notes:**
```

_________________________________

**Status:** ✅ Ready for Production