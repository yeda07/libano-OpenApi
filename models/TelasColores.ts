/**
 * API Tapiceria
 * Documentación Api Tapiceria
 *
 * OpenAPI spec version: v1
 * Contact: maycolguerrero2021@itp.edu.co
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class TelasColores {
    'id'?: number;
    'telaId'?: string;
    'colorId'?: string;
    'telaData'?: string;
    'colorData'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "telaId",
            "baseName": "tela_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "colorId",
            "baseName": "color_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "telaData",
            "baseName": "tela_data",
            "type": "string",
            "format": ""
        },
        {
            "name": "colorData",
            "baseName": "color_data",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TelasColores.attributeTypeMap;
    }

    public constructor() {
    }
}

