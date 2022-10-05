import './styles/index.css';
import * as $ from './utils/dom';
import IconInfo from './assets/info.svg';
import IconWarning from './assets/warning.svg';
import IconDanger from './assets/danger.svg';

export const AlertVariant = {
  AlertInfo: 'alert-info',
  AlertWarning: 'alert-warning',
  AlertDanger: 'alert-danger',
};

export default class AlertVariantTune {

  constructor({ api, data, config, block }) {
    this.api = api;
    this.data = data;
    this.config = config;
    this.block = block;

    this.variants = [
      {
        name: AlertVariant.AlertInfo,
        icon: IconInfo,
        title: this.api.i18n.t('Info'),
      },
      {
        name: AlertVariant.AlertWarning,
        icon: IconWarning,
        title: this.api.i18n.t('Warning'),
      },
      {
        name: AlertVariant.AlertDanger,
        icon: IconDanger,
        title: this.api.i18n.t('Danger'),
      },
    ];

    this.wrapper = undefined;
  }

  static get isTune() {
    return true;
  }

  static get CSS() {
    return {
      toggler: 'cdx-alert-variant__toggler',
    };
  }

  render() {
    const tuneWrapper = $.make('div', '');

    this.variants.forEach(({ name, icon, title }) => {
      const toggler = $.make('div', [this.api.styles.settingsButton, AlertVariantTune.CSS.toggler], {
        innerHTML: icon,
      });

      toggler.dataset.name = name;

      this.api.tooltip.onHover(toggler, title, {
        placement: 'top',
        hidingDelay: 500,
      });

      tuneWrapper.appendChild(toggler);
    });

    this.api.listeners.on(tuneWrapper, 'click', (event) => {
      this.tuneClicked(event);
    });

    return tuneWrapper;
  }

  tuneClicked(event) {
    const tune = event.target.closest(`.${this.api.styles.settingsButton}`);
    const isEnabled = tune.classList.contains(this.api.styles.settingsButtonActive);

    tune.classList.toggle(this.api.styles.settingsButtonActive, !isEnabled);

    this.variant = !isEnabled ? tune.dataset.name : '';
  }

  wrap(blockContent) {
    this.wrapper = $.make('div');
    this.variant = this.data;
    this.wrapper.appendChild(blockContent);
    return this.wrapper;
  }

  set variant(name) {
    this.data = name;

    this.variants.forEach((variant) => {
      this.wrapper.classList.toggle(`cdx-alert-variant--${variant.name}`, variant.name === this.data);
    });
  }

  save() {
    return this.data || '';
  }
}
