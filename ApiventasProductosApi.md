# .ApiventasProductosApi

All URIs are relative to *https://tapiceria-7efd4dfba1d5.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiventasProductosCreate**](ApiventasProductosApi.md#apiventasProductosCreate) | **POST** /apiventasProductos/ | 
[**apiventasProductosDelete**](ApiventasProductosApi.md#apiventasProductosDelete) | **DELETE** /apiventasProductos/{id}/ | 
[**apiventasProductosList**](ApiventasProductosApi.md#apiventasProductosList) | **GET** /apiventasProductos/ | 
[**apiventasProductosPartialUpdate**](ApiventasProductosApi.md#apiventasProductosPartialUpdate) | **PATCH** /apiventasProductos/{id}/ | 
[**apiventasProductosRead**](ApiventasProductosApi.md#apiventasProductosRead) | **GET** /apiventasProductos/{id}/ | 
[**apiventasProductosUpdate**](ApiventasProductosApi.md#apiventasProductosUpdate) | **PUT** /apiventasProductos/{id}/ | 


# **apiventasProductosCreate**
> VentasProductos apiventasProductosCreate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasProductosApi(configuration);

let body:.ApiventasProductosApiApiventasProductosCreateRequest = {
  // VentasProductos
  data: {
    cantidad: -2147483648,
    venta: 1,
    producto: 1,
  },
};

apiInstance.apiventasProductosCreate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **VentasProductos**|  |


### Return type

**VentasProductos**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiventasProductosDelete**
> void apiventasProductosDelete()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasProductosApi(configuration);

let body:.ApiventasProductosApiApiventasProductosDeleteRequest = {
  // number | A unique integer value identifying this ventas productos.
  id: 1,
};

apiInstance.apiventasProductosDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this ventas productos. | defaults to undefined


### Return type

**void**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiventasProductosList**
> Array<VentasProductos> apiventasProductosList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasProductosApi(configuration);

let body:any = {};

apiInstance.apiventasProductosList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**Array<VentasProductos>**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiventasProductosPartialUpdate**
> VentasProductos apiventasProductosPartialUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasProductosApi(configuration);

let body:.ApiventasProductosApiApiventasProductosPartialUpdateRequest = {
  // number | A unique integer value identifying this ventas productos.
  id: 1,
  // VentasProductos
  data: {
    cantidad: -2147483648,
    venta: 1,
    producto: 1,
  },
};

apiInstance.apiventasProductosPartialUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **VentasProductos**|  |
 **id** | [**number**] | A unique integer value identifying this ventas productos. | defaults to undefined


### Return type

**VentasProductos**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiventasProductosRead**
> VentasProductos apiventasProductosRead()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasProductosApi(configuration);

let body:.ApiventasProductosApiApiventasProductosReadRequest = {
  // number | A unique integer value identifying this ventas productos.
  id: 1,
};

apiInstance.apiventasProductosRead(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**number**] | A unique integer value identifying this ventas productos. | defaults to undefined


### Return type

**VentasProductos**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiventasProductosUpdate**
> VentasProductos apiventasProductosUpdate(data)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ApiventasProductosApi(configuration);

let body:.ApiventasProductosApiApiventasProductosUpdateRequest = {
  // number | A unique integer value identifying this ventas productos.
  id: 1,
  // VentasProductos
  data: {
    cantidad: -2147483648,
    venta: 1,
    producto: 1,
  },
};

apiInstance.apiventasProductosUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | **VentasProductos**|  |
 **id** | [**number**] | A unique integer value identifying this ventas productos. | defaults to undefined


### Return type

**VentasProductos**

### Authorization

[Basic](README.md#Basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


