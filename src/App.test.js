import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import { waitFor } from '@testing-library/dom';
import { locale, waitLocale } from 'svelte-i18n';
import './lib/i18n.js';
import App from './App.svelte';

// Template smoke test: the landing page must render localized content.
// This is the fail-safe -- CI refuses to go green if the template itself
// doesn't boot, so a broken template can never ship to the fleet.
describe('template smoke', () => {
  it('renders the localized landing page', async () => {
    locale.set('en');
    await waitLocale();

    render(App);

    await waitFor(() => {
      expect(document.querySelector('h1')?.textContent).toContain('DOGS');
    });
    expect(document.body.textContent).toContain(
      'premium, minimalist Svelte boilerplate'
    );
  });

  it('switches locale to Spanish', async () => {
    locale.set('es');
    await waitLocale();

    render(App);

    await waitFor(() => {
      expect(document.querySelector('h1')?.textContent).toContain('DOGS');
    });
  });
});
