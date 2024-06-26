
export let set = {
    'img-type-error' : [
        'The selected file is not an image.'
    ],
    'layer-delete-msg': [
        'Are you sure to delete this layer?'
    ],
    'line-delete-msg': [
        'Are you sure to delete this line?'
    ],
    'fail-get-os-font-list': [
        'Failed to load the list of fonts in the OS'
    ],
    'dont-support' : [
        'This browser does not support the feature.'
    ],
    'clipboard-permission-denied' : [
        'The clipboard permission has been denied.'
    ]
}

export const emun = {
    en: 0,
}

export let num = emun.en;

export function setNum(enumCode) {
    num = enumCode;
}