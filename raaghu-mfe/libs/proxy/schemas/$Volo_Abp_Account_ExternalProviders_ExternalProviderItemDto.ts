/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Volo_Abp_Account_ExternalProviders_ExternalProviderItemDto = {
    properties: {
        name: {
            type: 'string',
            isNullable: true,
        },
        enabled: {
            type: 'boolean',
        },
        properties: {
            type: 'array',
            contains: {
                type: 'Volo_Abp_Account_ExternalProviders_ExternalProviderSettingsProperty',
            },
            isNullable: true,
        },
    },
} as const;