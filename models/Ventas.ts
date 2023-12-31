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

export class Ventas {
    'id'?: number;
    'fechaVenta'?: string | null;
    'comprador': number;
    'vendedor': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "fechaVenta",
            "baseName": "fecha_venta",
            "type": "string",
            "format": "date"
        },
        {
            "name": "comprador",
            "baseName": "comprador",
            "type": "number",
            "format": ""
        },
        {
            "name": "vendedor",
            "baseName": "vendedor",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Ventas.attributeTypeMap;
    }

    public constructor() {
    }
}

