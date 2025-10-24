// --- UTILITIES ---
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

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

const toggleVisibility = (element, force) => element.classList.toggle('is-visible', force);

const updateSliderPosition = (slider, activeButton) => {
	if (!slider || !activeButton) return;
	Object.assign(slider.style, {
		left: `${activeButton.offsetLeft}px`,
		width: `${activeButton.offsetWidth}px`,
		height: `${activeButton.offsetHeight}px`,
		top: `${activeButton.offsetTop}px`
	});
};

const updateFilledSlider = (slider) => {
	const percent = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
	slider.style.background = `linear-gradient(to right, var(--color-primary) ${percent}%, var(--color-border-default) ${percent}%)`;
};

const updateSliderLabel = (slider, label) => {
	const percent = (slider.value - slider.min) / (slider.max - slider.min);
	label.style.left = `${percent * (slider.offsetWidth - 20) + 10}px`;
	label.textContent = slider.value;
};

const createModalManager = (backdropId, triggerIds = []) => {
	const backdrop = $(`#${backdropId}`);
	if (!backdrop) return null;

	const toggle = (visible) => backdrop.classList.toggle('is-visible', visible);
	const isEscapable = backdrop.dataset.escapable !== 'false';

	triggerIds.forEach(id => $(`#${id}`)?.addEventListener('click', () => toggle(true)));

	if (isEscapable) {
		backdrop.addEventListener('click', (e) => e.target === backdrop && toggle(false));
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape' && backdrop.classList.contains('is-visible')) {
				const allModals = Array.from(document.querySelectorAll('.modal-backdrop.is-visible'));
				const topmost = allModals[allModals.length - 1];
				if (topmost === backdrop) toggle(false);
			}
		});
	}

	return { openModal: () => toggle(true), closeModal: () => toggle(false) };
};

const createDropdownManager = (toggleId, menuId) => {
	const toggle = $(`#${toggleId}`);
	const menu = $(`#${menuId}`);
	if (!toggle || !menu) return null;

	const setOpen = (open) => {
		menu.classList.toggle('is-visible', open);
		toggle.setAttribute('aria-expanded', open);
	};

	toggle.addEventListener('click', (e) => {
		e.stopPropagation();
		setOpen(!menu.classList.contains('is-visible'));
	});
	document.addEventListener('click', (e) => !menu.contains(e.target) && e.target !== toggle && setOpen(false));

	return { openDropdown: () => setOpen(true), closeDropdown: () => setOpen(false), toggle, menu };
};

const createPillSelector = (selectorId, valueDisplayId) => {
	const group = $(`#${selectorId}`);
	if (!group) return null;

	const valueDisplay = $(`#${valueDisplayId}`);
	const buttons = group.querySelectorAll('.btn-pill');
	const slider = group.querySelector('.pill-selector-slider');

	const updateSlider = (btn) => btn && updateSliderPosition(slider, btn);
	const getActive = () => group.querySelector('.btn-pill.active');

	updateSlider(getActive());

	group.addEventListener('click', (e) => {
		if (!e.target.classList.contains('btn-pill')) return;
		buttons.forEach(btn => btn.classList.remove('active'));
		e.target.classList.add('active');
		if (valueDisplay) valueDisplay.textContent = e.target.dataset.value;
		updateSlider(e.target);
	});

	window.addEventListener('resize', () => updateSlider(getActive()));

	return { group, buttons, updateSlider };
};

// --- RESPONSIVE TABS SYSTEM ---
const initResponsiveTabs = () => {
	const tabsContainer = $('#responsive-tabs');
	const tabsList = $('#tabs-list');
	const hamburgerUI = $('#hamburger-ui');
	const hamburgerWrapper = $('#hamburger-wrapper');
	const hamburgerText = $('#hamburger-text');
	const dropdown = $('#tabs-dropdown');
	const slider = tabsContainer.querySelector('.responsive-tabs-slider');
	const allButtons = Array.from(tabsList.querySelectorAll('.responsive-tabs-btn'));

	if (!tabsContainer || !tabsList || !dropdown) return;

	let activeButton = allButtons[0];
	let isDropdownOpen = false;

	const updateSlider = (btn) => {
		if (!btn || !slider) return;
		slider.style.left = `${btn.offsetLeft}px`;
		slider.style.width = `${btn.offsetWidth}px`;
		slider.style.height = '32px';
		slider.style.top = '50%';
		slider.style.transform = 'translateY(-50%)';
	};

	const populateDropdown = () => {
		dropdown.innerHTML = '';
		allButtons.forEach(btn => {
			const item = document.createElement('button');
			item.className = 'responsive-tabs-dropdown-item';
			item.textContent = btn.textContent;
			item.dataset.tab = btn.dataset.tab;
			if (btn === activeButton) item.classList.add('active');
			item.addEventListener('click', (e) => {
				e.stopPropagation();
				selectTab(btn, true);
			});
			dropdown.appendChild(item);
		});
	};

	const selectTab = (btn, closeDropdown = false) => {
		if (!btn) return;
		activeButton = btn;

		allButtons.forEach(b => b.classList.remove('active'));
		btn.classList.add('active');

		updateSlider(btn);

		hamburgerText.textContent = btn.textContent;

		Array.from(dropdown.children).forEach(item => {
			item.classList.toggle('active', item.dataset.tab === btn.dataset.tab);
		});

		const target = document.querySelector(btn.dataset.target);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}

		if (closeDropdown) {
			isDropdownOpen = false;
			dropdown.classList.remove('visible');
		}
	};

	const checkOverflow = () => {
		tabsList.style.display = 'flex';
		hamburgerUI.classList.remove('visible');
		slider.classList.remove('hidden');

		const pageHeader = $('.page-header');
		const themeSwitch = $('.theme-switch-wrapper');
		if (!pageHeader || !themeSwitch) return;

		const headerWidth = pageHeader.offsetWidth;
		const actionsWidth = themeSwitch.offsetWidth;
		const headerPadding = 32;
		const gapBetween = 32;

		const availableWidth = headerWidth - headerPadding - actionsWidth - gapBetween;
		const tabsWidth = tabsList.scrollWidth;

		if (tabsWidth > availableWidth) {
			tabsList.style.display = 'none';
			hamburgerUI.classList.add('visible');
			slider.classList.add('hidden');
			dropdown.classList.remove('visible');
			isDropdownOpen = false;
		} else {
			updateSlider(activeButton);
		}
	};

	hamburgerWrapper.addEventListener('click', (e) => {
		e.stopPropagation();
		isDropdownOpen = !isDropdownOpen;
		dropdown.classList.toggle('visible', isDropdownOpen);

		if (isDropdownOpen) {
			const rect = hamburgerWrapper.getBoundingClientRect();
			dropdown.style.top = `${rect.bottom + 8}px`;
			dropdown.style.left = `${rect.left}px`;
		}
	});

	allButtons.forEach(btn => {
		btn.addEventListener('click', () => selectTab(btn, false));
	});

	const closeDropdownOnOutside = (e) => {
		if (hamburgerWrapper.contains(e.target) || dropdown.contains(e.target)) {
			return;
		}
		isDropdownOpen = false;
		dropdown.classList.remove('visible');
	};

	document.addEventListener('click', closeDropdownOnOutside);
	document.addEventListener('touchstart', closeDropdownOnOutside);

	populateDropdown();
	updateSlider(activeButton);

	setTimeout(() => checkOverflow(), 100);

	window.addEventListener('resize', () => setTimeout(checkOverflow, 50));
	window.addEventListener('load', () => setTimeout(checkOverflow, 100));
};

// --- THEME SWITCHER ---
const initThemeSwitcher = () => {
	const checkbox = $('#theme-checkbox');
	if (!checkbox) return;

	const setTheme = (theme) => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('robonxt_theme', theme);
		checkbox.checked = theme === 'dark';
	};

	const saved = localStorage.getItem('robonxt_theme');
	const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

	if (saved) {
		setTheme(saved);
	} else {
		const theme = prefersDark.matches ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		checkbox.checked = theme === 'dark';
	}

	prefersDark.addEventListener('change', (e) => !localStorage.getItem('robonxt_theme') && setTheme(e.matches ? 'dark' : 'light'));
	checkbox.addEventListener('change', () => setTheme(checkbox.checked ? 'dark' : 'light'));
};

// --- MODAL LOGIC ---
const initModal = () => {
	const criticalManager = createModalManager('modal-backdrop', ['open-modal-btn']);
	if (criticalManager) ['close-modal-btn', 'cancel-modal-btn'].forEach(id => $(`#${id}`)?.addEventListener('click', criticalManager.closeModal));

	const infoManager = createModalManager('info-modal-backdrop', ['open-info-modal-btn']);
	if (infoManager) {
		['close-info-modal-btn', 'close-info-modal-footer-btn'].forEach(id => $(`#${id}`)?.addEventListener('click', infoManager.closeModal));

		const learnMoreLink = $('#learn-more-link');
		if (learnMoreLink) {
			learnMoreLink.addEventListener('click', (e) => {
				e.preventDefault();
				infoManager.openModal();
			});
		}
	}
};

// --- DROPDOWN LOGIC ---
const initDropdown = () => createDropdownManager('dropdown-toggle', 'dropdown-menu');

// --- TABS LOGIC ---
const initTabs = () => {
	const container = $('.tabs-list');
	if (!container) return;

	container.addEventListener('click', (e) => {
		if (!e.target.classList.contains('tab-trigger')) return;
		const targetId = e.target.dataset.tab;
		container.querySelectorAll('.tab-trigger').forEach(t => t.classList.remove('active'));
		e.target.classList.add('active');
		$$('.tab-pane').forEach(p => p.classList.toggle('active', p.id === targetId));
	});
};

// --- PILL SELECTOR LOGIC ---
const initPillSelectors = () => createPillSelector('pill-selector-1', 'pill-value-1');

// --- SLIDER LOGIC ---
const initSliders = () => {
	const slider = $('#my-slider');
	const label = $('.slider-value-label');
	if (slider && label) {
		const update = () => updateSliderLabel(slider, label);
		const setOpacity = (val) => label.style.opacity = val;
		slider.addEventListener('input', update);
		['mouseenter', 'mousedown'].forEach(e => slider.addEventListener(e, () => setOpacity('1')));
		['mouseleave', 'mouseup'].forEach(e => slider.addEventListener(e, () => setOpacity('0')));
		update();
	}

	const filled = $('#my-slider-filled');
	if (filled) {
		const update = () => updateFilledSlider(filled);
		filled.addEventListener('input', update);
		update();
	}
};

// --- COLOR SWATCH COPY LOGIC ---
const initColorSwatches = () => {
	$$('.color-swatch').forEach((swatch) => {
		swatch.setAttribute('tabindex', '0');
		swatch.setAttribute('role', 'button');
		const colorEl = swatch.querySelector('.swatch-color');
		const hexLabel = swatch.querySelector('.swatch-hex');
		const originalText = hexLabel.textContent;

		const handleCopy = async () => {
			const hex = rgbToHex(getComputedStyle(colorEl).backgroundColor);
			if (!hex) return;
			const ok = await copyTextToClipboard(hex);
			hexLabel.textContent = ok ? `Copied ${hex}` : hex;
			hexLabel.classList.add('copied');
			setTimeout(() => {
				hexLabel.textContent = originalText;
				hexLabel.classList.remove('copied');
			}, 1200);
		};

		swatch.addEventListener('click', handleCopy);
		swatch.addEventListener('keydown', (e) => ['Enter', ' '].includes(e.key) && (e.preventDefault(), handleCopy()));
	});
};

// --- HEADER TABS ---
const initHeaderTabs = () => {
	const container = $('#nav-items');
	if (!container) return;

	const tabs = Array.from(container.querySelectorAll('.btn-pill'));
	const sections = tabs.map(t => $(t.getAttribute('data-target'))).filter(Boolean);
	const slider = container.querySelector('.pill-selector-slider');

	const updateSlider = (tab) => tab && updateSliderPosition(slider, tab);

	const setActive = (tab, scrollTo = true) => {
		if (!tab) return;
		tabs.forEach(t => t.classList.remove('active'));
		tab.classList.add('active');
		const target = $(tab.getAttribute('data-target'));
		const name = tab.getAttribute('data-tab');
		if (name) location.hash = name;
		if (scrollTo && target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });

		// Update mobile nav title
		const navTitle = $('#nav-title');
		if (navTitle) navTitle.textContent = tab.textContent;

		updateSlider(tab);
	};

	tabs.forEach(btn => btn.addEventListener('click', (e) => (e.preventDefault(), setActive(btn, true))));

	const syncFromScroll = () => {
		let activeIdx = 0;
		for (let i = 0; i < sections.length; i++) {
			if (sections[i].getBoundingClientRect().top - 120 <= 0) activeIdx = i;
			else break;
		}
		const activeTab = tabs[activeIdx];
		if (!activeTab || activeTab.classList.contains('active')) return;
		tabs.forEach(t => t.classList.remove('active'));
		activeTab.classList.add('active');

		// Update mobile nav title
		const navTitle = $('#nav-title');
		if (navTitle) navTitle.textContent = activeTab.textContent;

		updateSlider(activeTab);
	};

	const hash = location.hash.slice(1);
	setActive(tabs.find(t => t.getAttribute('data-tab') === hash) || tabs[0], false);

	window.addEventListener('scroll', syncFromScroll, { passive: true });
	window.addEventListener('resize', () => updateSlider(container.querySelector('.btn-pill.active')));
};


// --- MOTION DEMO ---
const initMotionDemo = () => {
	const btn = $('#motion-toggle');
	const demo = $('#motion-demo');
	if (btn && demo) {
		btn.addEventListener('click', () => demo.querySelectorAll('.motion-box').forEach(box => box.classList.toggle('move')));
	}
};

// --- INITIALIZATION ---
const init = () => {
	initResponsiveTabs();
	initThemeSwitcher();
	initModal();
	initDropdown();
	initTabs();
	initPillSelectors();
	initSliders();
	initColorSwatches();
	initMotionDemo();
};

document.addEventListener('DOMContentLoaded', init);
