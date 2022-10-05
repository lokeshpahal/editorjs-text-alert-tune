# Text Variant Tune

Editor.js Alert Tune allows applying one of defined text alert variant: **Info**, **Warning**, and **Danger** to any block.

## How to use

1. Install

```js
yarn add @editorjs/text-variant-tune
```

2. Connect

```js
import EditorJS from '@editorjs/editorjs';
import AlertVariantTune from 'lokeshpahal/text-alert-tune';

/**
 * Editor.js configuration
 */
const editor = new EditorJS({
  /**
   * Connect tool
   */
  tools: {
    alertVariant: AlertVariantTune
  },

  /**
   * Apply to all the blocks
   */
  tunes: ['alertVariant'],

  // ...
})
```

Optionally, you can connect this Tune only for specified blocks:

```js
import EditorJS from '@editorjs/editorjs';
import AlertVariantTune from 'lokeshpahal/text-alert-tune';

/**
 * Editor.js configuration
 */
const editor = new EditorJS({
  tools: {
    alertVariant: AlertVariantTune,
    paragraph: { // apply only for the 'paragraph' tool
      tunes: ['alertVariant'],
    }
  },
})
```
