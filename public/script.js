document.addEventListener('DOMContentLoaded', () => {
	// --- THEME SWITCHER ---
	const themeCheckbox = document.getElementById('theme-checkbox');
	const htmlEl = document.documentElement;

	const setTheme = (theme) => {
		htmlEl.setAttribute('data-theme', theme);
		localStorage.setItem('robonxt_theme', theme);
		themeCheckbox.checked = theme === 'dark';
	};

	// Check for saved theme, else use device preference
	const savedTheme = localStorage.getItem('robonxt_theme');
	let initialTheme = savedTheme;
	if (!savedTheme) {
		// Detect device preference
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		initialTheme = prefersDark ? 'dark' : 'light';
	}
	setTheme(initialTheme);

	// Listen for device preference changes
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		// Only update if no manual override in localStorage
		if (!localStorage.getItem('robonxt_theme')) {
			const newTheme = e.matches ? 'dark' : 'light';
			setTheme(newTheme);
		}
	});

	themeCheckbox.addEventListener('change', () => {
		const newTheme = themeCheckbox.checked ? 'dark' : 'light';
		setTheme(newTheme);
	});

	// --- MODAL LOGIC ---
	const openModalBtn = document.getElementById('open-modal-btn');
	const closeModalBtn = document.getElementById('close-modal-btn');
	const cancelModalBtn = document.getElementById('cancel-modal-btn');
	const modalBackdrop = document.getElementById('modal-backdrop');

	const openModal = () => modalBackdrop.classList.add('is-visible');
	const closeModal = () => modalBackdrop.classList.remove('is-visible');

	openModalBtn.addEventListener('click', openModal);
	closeModalBtn.addEventListener('click', closeModal);
	cancelModalBtn.addEventListener('click', closeModal);
	modalBackdrop.addEventListener('click', (event) => { if (event.target === modalBackdrop) closeModal(); });
	document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && modalBackdrop.classList.contains('is-visible')) closeModal(); });

	// --- DROPDOWN LOGIC ---
	const dropdownToggle = document.getElementById('dropdown-toggle');
	const dropdownMenu = document.getElementById('dropdown-menu');

	dropdownToggle.addEventListener('click', (event) => {
		event.stopPropagation();
		dropdownMenu.classList.toggle('is-visible');
	});

	document.addEventListener('click', (event) => {
		if (dropdownToggle && !dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
			dropdownMenu.classList.remove('is-visible');
		}
	});

	// (Removed duplicate header tabs IIFE to avoid conflicting logic)

	// --- TABS LOGIC ---
	const tabContainer = document.querySelector('.tabs-list');
	if (tabContainer) {
		tabContainer.addEventListener('click', (event) => {
			if (event.target.classList.contains('tab-trigger')) {
				const targetTabId = event.target.dataset.tab;
				tabContainer.querySelectorAll('.tab-trigger').forEach(trigger => trigger.classList.remove('active'));
				event.target.classList.add('active');
				document.querySelectorAll('.tab-pane').forEach(pane => {
					pane.classList.remove('active');
					if (pane.id === targetTabId) pane.classList.add('active');
				});
			}
		});
	}

	// --- PILL SELECTOR LOGIC ---
	function setupPillSelector(selectorId, valueDisplayId) {
		const group = document.getElementById(selectorId);
		if (!group) return;
		const valueDisplay = document.getElementById(valueDisplayId);
		const buttons = group.querySelectorAll('.btn-pill');
		const slider = document.createElement('div');
		slider.className = 'pill-slider';
		group.prepend(slider);

		function updateSlider(activeButton) {
			if (!activeButton) return;
			const rect = activeButton.getBoundingClientRect();
			const groupRect = group.getBoundingClientRect();
			slider.style.width = `${rect.width}px`;
			slider.style.transform = `translateX(${rect.left - groupRect.left}px)`;
		}

		group.addEventListener('click', (e) => {
			if (e.target.classList.contains('btn-pill')) {
				buttons.forEach(btn => btn.classList.remove('active'));
				e.target.classList.add('active');
				updateSlider(e.target);
				if (valueDisplay) valueDisplay.textContent = e.target.dataset.value;
			}
		});

		const initialActive = group.querySelector('.btn-pill.active');
		if (initialActive) updateSlider(initialActive);
		window.addEventListener('resize', () => {
			const active = group.querySelector('.btn-pill.active');
			if (active) updateSlider(active);
		});
	}
	setupPillSelector('pill-selector-1', 'pill-value-1');

	// --- SLIDER LOGIC ---
	const slider = document.getElementById('my-slider');
	const sliderValueLabel = document.querySelector('.slider-value-label');

	if (slider && sliderValueLabel) {
		function updateSliderLabel(value) {
			const percent = (value - slider.min) / (slider.max - slider.min);
			const labelPosition = percent * (slider.offsetWidth - 20) + 10;
			sliderValueLabel.style.left = `${labelPosition}px`;
			sliderValueLabel.textContent = value;
		}
		slider.addEventListener('input', () => updateSliderLabel(slider.value));
		slider.addEventListener('mouseenter', () => sliderValueLabel.style.opacity = '1');
		slider.addEventListener('mouseleave', () => sliderValueLabel.style.opacity = '0');
		slider.addEventListener('mousedown', () => sliderValueLabel.style.opacity = '1');
		slider.addEventListener('mouseup', () => sliderValueLabel.style.opacity = '0');
		updateSliderLabel(slider.value);
	}

	// --- COLOR SWATCH COPY LOGIC ---
	function rgbToHex(rgbStr) {
		const match = rgbStr.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
		if (!match) return null;
		return `#${Number(match[1]).toString(16).padStart(2, '0')}${Number(match[2]).toString(16).padStart(2, '0')}${Number(match[3]).toString(16).padStart(2, '0')}`.toUpperCase();
	}

	async function copyTextToClipboard(text) {
		try {
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(text);
				return true;
			}
			const ta = document.createElement('textarea');
			ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
			document.body.appendChild(ta);
			ta.focus(); ta.select(); document.execCommand('copy');
			document.body.removeChild(ta);
			return true;
		} catch (e) { return false; }
	}

	function setupColorSwatches() {
		document.querySelectorAll('.color-swatch').forEach((swatch) => {
			swatch.setAttribute('tabindex', '0');
			swatch.setAttribute('role', 'button');
			const colorEl = swatch.querySelector('.swatch-color');
			const hexLabel = swatch.querySelector('.swatch-hex');
			const originalHexText = hexLabel.textContent;

			async function handleCopy() {
				const computedStyle = getComputedStyle(colorEl).backgroundColor;
				const hex = rgbToHex(computedStyle);
				if (!hex) return;
				const ok = await copyTextToClipboard(hex);
				hexLabel.textContent = ok ? `Copied ${hex}` : hex;
				hexLabel.classList.add('copied');
				setTimeout(() => {
					hexLabel.textContent = originalHexText;
					hexLabel.classList.remove('copied');
				}, 1200);
			}
			swatch.addEventListener('click', handleCopy);
			swatch.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleCopy(); } });
		});
	}
	setupColorSwatches();

	// --- TABS (Header) ---
	(function initTabs() {
		const tabContainer = document.getElementById('wrapper-tabs');
		if (!tabContainer) return;
		const tabs = Array.from(tabContainer.querySelectorAll('.tab-button'));
		const slider = tabContainer.querySelector('.tab-slider');
		const sections = tabs.map(t => document.querySelector(t.getAttribute('data-target'))).filter(Boolean);

		function moveSlider(tab, noTransition = false) {
			if (!tab || !slider) return;
			if (noTransition) slider.style.transition = 'none';
			// Use rects like pill selector to ensure precise positioning within padded container
			const tabRect = tab.getBoundingClientRect();
			const containerRect = tabContainer.getBoundingClientRect();
			const left = tabRect.left - containerRect.left; // subtract container padding (4px)
			const width = tabRect.width;
			slider.style.width = width + 'px';
			slider.style.transform = `translateX(${left}px)`;
			if (noTransition) requestAnimationFrame(() => slider.style.transition = '');
		}

		function setActive(tab, scrollTo = true) {
			if (!tab) return;
			tabs.forEach(b => b.classList.remove('active'));
			tab.classList.add('active');
			moveSlider(tab);
			const targetSel = tab.getAttribute('data-target');
			const target = targetSel ? document.querySelector(targetSel) : null;
			const name = tab.getAttribute('data-tab');
			if (name) location.hash = name;
			if (scrollTo && target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			const title = document.getElementById('mobile-nav-title');
			if (title) title.textContent = tab.textContent;
		}

		tabs.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
				setActive(btn, true);
			});
		});

		function syncFromScroll() {
			const threshold = 120; // header offset allowance
			let activeIdx = 0;
			for (let i = 0; i < sections.length; i++) {
				const rect = sections[i].getBoundingClientRect();
				if (rect.top - threshold <= 0) activeIdx = i; else break;
			}
			const activeTab = tabs[activeIdx];
			if (!activeTab || activeTab.classList.contains('active')) { moveSlider(activeTab); return; }
			tabs.forEach(b => b.classList.remove('active'));
			activeTab.classList.add('active');
			moveSlider(activeTab);
			const title = document.getElementById('mobile-nav-title');
			if (title) title.textContent = activeTab.textContent;
		}

		// Initialize active by hash or first tab
		const byHash = location.hash.slice(1);
		const initial = tabs.find(t => t.getAttribute('data-tab') === byHash) || tabs[0];
		setActive(initial, false);
		moveSlider(initial, true);

		window.addEventListener('scroll', syncFromScroll, { passive: true });
		window.addEventListener('resize', () => moveSlider(tabContainer.querySelector('.tab-button.active')));
	})();

	// --- MOBILE NAV (Dropdown) ---
	(function initMobileNav() {
		const btn = document.getElementById('btn-mobile-nav');
		const dd = document.getElementById('mobile-nav-dropdown');
		const tabContainer = document.getElementById('wrapper-tabs');
		if (!btn || !dd || !tabContainer) return;
		const tabs = Array.from(tabContainer.querySelectorAll('.tab-button'));

		function buildDropdown() {
			dd.innerHTML = '';
			tabs.forEach(t => {
				const link = document.createElement('button');
				link.className = 'mobile-nav-link';
				link.type = 'button';
				link.setAttribute('data-tab', t.getAttribute('data-tab'));
				link.textContent = t.textContent;
				link.addEventListener('click', () => {
					t.click();
					closeDropdown();
					btn.focus();
				});
				dd.appendChild(link);
			});
		}
		buildDropdown();

		function openDropdown() {
			dd.classList.add('is-visible');
			btn.setAttribute('aria-expanded', 'true');
		}
		function closeDropdown() {
			dd.classList.remove('is-visible');
			btn.setAttribute('aria-expanded', 'false');
		}
		btn.addEventListener('click', (e) => {
			e.stopPropagation();
			if (dd.classList.contains('is-visible')) closeDropdown(); else openDropdown();
		});
		document.addEventListener('click', (e) => { if (!dd.contains(e.target) && e.target !== btn) closeDropdown(); });
		document.addEventListener('keydown', (e) => {
			const links = Array.from(dd.querySelectorAll('.mobile-nav-link'));
			const idx = links.indexOf(document.activeElement);
			if (e.key === 'Escape') { closeDropdown(); return; }
			if (!dd.classList.contains('is-visible')) return;
			if (e.key === 'ArrowDown') { e.preventDefault(); links[(idx < 0 ? 0 : (idx + 1) % links.length)]?.focus(); }
			if (e.key === 'ArrowUp') { e.preventDefault(); links[(idx < 0 ? links.length - 1 : (idx - 1 + links.length) % links.length)]?.focus(); }
			if (e.key === 'Home') { e.preventDefault(); links[0]?.focus(); }
			if (e.key === 'End') { e.preventDefault(); links[links.length - 1]?.focus(); }
			if ((e.key === 'Enter' || e.key === ' ') && document.activeElement?.classList.contains('mobile-nav-link')) { e.preventDefault(); document.activeElement.click(); }
		});

		// Sync active state in dropdown
		function syncActive() {
			const current = (location.hash || '').slice(1);
			const activeTab = tabs.find(t => t.getAttribute('data-tab') === current) || tabContainer.querySelector('.tab-button.active');
			Array.from(dd.querySelectorAll('.mobile-nav-link')).forEach(link => {
				link.classList.toggle('active', link.getAttribute('data-tab') === activeTab?.getAttribute('data-tab'));
			});
			const title = document.getElementById('mobile-nav-title');
			if (title && activeTab) title.textContent = activeTab.textContent;
		}
		window.addEventListener('hashchange', syncActive);
		syncActive();
	})();

	// --- MOTION DEMO ---
	const motionBtn = document.getElementById('motion-toggle');
	const motionDemo = document.getElementById('motion-demo');
	if (motionBtn && motionDemo) {
		motionBtn.addEventListener('click', () => {
			motionDemo.querySelectorAll('.motion-box').forEach(box => box.classList.toggle('move'));
		});
	}
});
