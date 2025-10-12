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
		document.addEventListener('keydown', (e) => e.key === 'Escape' && backdrop.classList.contains('is-visible') && toggle(false));
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

// --- RESPONSIVE NAVIGATION ---
const initResponsiveNavigation = () => {
	const headerLeft = $('.header-left');
	const pageHeader = $('.page-header');
	if (!headerLeft || !pageHeader) return;

	const checkOverflow = () => {
		headerLeft.classList.remove('mobile-mode');
		const themeWidth = $('.theme-switch-wrapper')?.offsetWidth || 0;
		const available = pageHeader.offsetWidth - themeWidth - 48;
		if (headerLeft.scrollWidth > available) headerLeft.classList.add('mobile-mode');
	};

	checkOverflow();
	window.addEventListener('resize', checkOverflow);
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
	const manager = createModalManager('modal-backdrop', ['open-modal-btn']);
	if (manager) ['close-modal-btn', 'cancel-modal-btn'].forEach(id => $(`#${id}`)?.addEventListener('click', manager.closeModal));
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
	const container = $('#wrapper-tabs');
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
		const title = $('#mobile-nav-title');
		if (title) title.textContent = tab.textContent;
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
		const title = $('#mobile-nav-title');
		if (title) title.textContent = activeTab.textContent;
		updateSlider(activeTab);
	};

	const hash = location.hash.slice(1);
	setActive(tabs.find(t => t.getAttribute('data-tab') === hash) || tabs[0], false);

	window.addEventListener('scroll', syncFromScroll, { passive: true });
	window.addEventListener('resize', () => updateSlider(container.querySelector('.btn-pill.active')));
};

// --- MOBILE NAVIGATION ---
const initMobileNavigation = () => {
	const btn = $('#btn-mobile-nav');
	const dd = $('#mobile-nav-dropdown');
	const container = $('#wrapper-tabs');
	if (!btn || !dd || !container) return;

	const tabs = Array.from(container.querySelectorAll('.btn-pill'));

	const buildDropdown = () => {
		dd.innerHTML = '';
		tabs.forEach(t => {
			const link = document.createElement('button');
			link.className = 'mobile-nav-link';
			link.type = 'button';
			link.setAttribute('data-tab', t.getAttribute('data-tab'));
			link.textContent = t.textContent;
			link.addEventListener('click', () => (t.click(), manager.closeDropdown(), btn.focus()));
			dd.appendChild(link);
		});
	};

	const manager = createDropdownManager('btn-mobile-nav', 'mobile-nav-dropdown');
	if (!manager) return;

	buildDropdown();

	document.addEventListener('keydown', (e) => {
		const links = Array.from(dd.querySelectorAll('.mobile-nav-link'));
		const idx = links.indexOf(document.activeElement);
		if (e.key === 'Escape') return manager.closeDropdown();
		if (!dd.classList.contains('is-visible')) return;
		if (e.key === 'ArrowDown') { e.preventDefault(); links[(idx < 0 ? 0 : (idx + 1) % links.length)]?.focus(); }
		if (e.key === 'ArrowUp') { e.preventDefault(); links[(idx < 0 ? links.length - 1 : (idx - 1 + links.length) % links.length)]?.focus(); }
		if (e.key === 'Home') { e.preventDefault(); links[0]?.focus(); }
		if (e.key === 'End') { e.preventDefault(); links[links.length - 1]?.focus(); }
		if (['Enter', ' '].includes(e.key) && document.activeElement?.classList.contains('mobile-nav-link')) { e.preventDefault(); document.activeElement.click(); }
	});

	const syncActive = () => {
		const hash = location.hash.slice(1);
		const activeTab = tabs.find(t => t.getAttribute('data-tab') === hash) || container.querySelector('.btn-pill.active');
		dd.querySelectorAll('.mobile-nav-link').forEach(link => {
			link.classList.toggle('active', link.getAttribute('data-tab') === activeTab?.getAttribute('data-tab'));
		});
		const title = $('#mobile-nav-title');
		if (title && activeTab) title.textContent = activeTab.textContent;
	};

	window.addEventListener('hashchange', syncActive);
	syncActive();
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
	initResponsiveNavigation();
	initThemeSwitcher();
	initModal();
	initDropdown();
	initTabs();
	initPillSelectors();
	initSliders();
	initColorSwatches();
	initHeaderTabs();
	initMobileNavigation();
	initMotionDemo();
};

document.addEventListener('DOMContentLoaded', init);
