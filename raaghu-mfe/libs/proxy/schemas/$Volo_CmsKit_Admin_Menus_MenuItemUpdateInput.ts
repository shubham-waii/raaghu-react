/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Volo_CmsKit_Admin_Menus_MenuItemUpdateInput = {
    properties: {
        displayName: {
            type: 'string',
            isRequired: true,
        },
        isActive: {
            type: 'boolean',
        },
        url: {
            type: 'string',
            isNullable: true,
        },
        icon: {
            type: 'string',
            isNullable: true,
        },
        target: {
            type: 'string',
            isNullable: true,
        },
        elementId: {
            type: 'string',
            isNullable: true,
        },
        cssClass: {
            type: 'string',
            isNullable: true,
        },
        pageId: {
            type: 'string',
            isNullable: true,
            format: 'uuid',
        },
        concurrencyStamp: {
            type: 'string',
            isNullable: true,
        },
    },
} as const;