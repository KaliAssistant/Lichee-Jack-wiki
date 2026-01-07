import {MetaRecord} from "nextra";

const DOCS_ITEMS: MetaRecord = {
    index: '',
    start: 'Getting Started',
    hardware: '',
    software: '',
    payloads: '',
    legal: '',
}


export default {
    index: {
        type: 'page',
        display: 'hidden',
        theme: {
            layout: 'full',
            toc: false,
            timestamp: false,
        }
    },
    docs: {
        type: 'page',
        title: 'Documentation',
        items: DOCS_ITEMS
    },
    contact: {
        title: 'Contact',
        type: 'menu',
        items: {
            linktree: {
                title: 'Linktree',
                href: 'https://linktr.ee/kaliassistant'
            }
        }
    },   
}
