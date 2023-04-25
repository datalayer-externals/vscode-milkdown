/* Copyright 2021, Milkdown by Mirone.*/
import { Editor } from '@milkdown/core';
import { commonmark } from '@milkdown/preset-commonmark';
import { gfm } from '@milkdown/preset-gfm';
import { math } from '@milkdown/plugin-math';
import { history } from '@milkdown/plugin-history';
import { listener } from '@milkdown/plugin-listener';
import { emoji, remarkTwemojiPlugin } from '@milkdown/plugin-emoji';
import { clipboard } from '@milkdown/plugin-clipboard';
import { prism } from '@milkdown/plugin-prism';
import { indent } from '@milkdown/plugin-indent';
import { cursor } from '@milkdown/plugin-cursor';
import { trailing } from '@milkdown/plugin-trailing';
import { upload } from '@milkdown/plugin-upload';

export const applyPlugins = (editor: Editor) => {
    return editor
        .use(commonmark)
        .use(gfm)
        .use(math)
        .use(history)
        .use(listener)
        .use(clipboard)
        .use(prism)
        .use(indent)
        .use(cursor)
        .use(trailing)
        .use(upload)
        .use(emoji.filter((x) => x !== remarkTwemojiPlugin));
};
